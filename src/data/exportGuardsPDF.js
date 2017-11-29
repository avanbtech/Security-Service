import PDFDocument from 'pdfkit';
import fs from 'fs';

import dbMethods from './dbFetchMethods';

function parseSecurityData(securityGrp) {
  const grpData0 = `Summary\n\
=========================================================================\n\n`;

  const grpData1  = `Supervisor: ${securityGrp.supervisor}    \
              Prepared By: ${securityGrp.preparedBy}\n`;

  const grpData2 = `Guards Reg. Rate: $${securityGrp.guardRegularRate}\n\
Guard Reg. Hours: ${securityGrp.guardRegularHours}\n`;

  const grpData3 = `Guards OT Rate: $${securityGrp.guardOTRate}\n\
Guards OT Hours: ${securityGrp.guardOTHours}\n`;

  const grpData4 = `SCSP Reg. Rate: $${securityGrp.scspRegularRate}\n\
SCSP Reg. Hours: ${securityGrp.scspRegularHours}\n`;

  const grpData5 = `SCSP OT Rate: $${securityGrp.scspOTRate}\n\
SCSP OT Hours: ${securityGrp.scspOTHours}\n`;

  const grpData6 = `Total Guard Billable Hours: ${securityGrp.totalGuardBillable}\n\
Total SCSP Billable Hours: ${securityGrp.totalSCSPBillable}\n`;

  const finalStr = grpData0 + grpData1 + grpData2 + grpData3 + grpData4 + grpData5 + grpData6;

  return finalStr;
}


//Sample format for schedule: 2017-11-29?12:30?12:45,2017-11-29?12:30?12:40
function formatScheduleData(schedule) {
  let finalStr = '\n';

  let x;
  for(x = 0; x < schedule.length; x++) {
    const data = schedule[x].split('?');
    const str = "          Date: " + data[0] + " Start time: " + data[1] + " End Time: " + data[2] + "\n";

    finalStr += str;
  }

  return finalStr;
}

function parseGuardData(guard, num) {
  const header = `Guard #${num}\n`;
  const adminInfo = `Security Group: ${guard.groupID}\n`;
  const guardInfo = `     Type: ${guard.grdType}\n     Name: ${guard.guardname}\n     Dispatch Number: ${guard.dispatchNumber}\n`;
  const phn = `     Phone Number: ${guard.telephone}\n`;
  const locInfo = `     Location: ${guard.location}\n`;
  const remarks = `     Remarks: ${guard.remarks}`;
  const schedule = `     Schedule: ${formatScheduleData(guard.schedule)}\n`;
  const FinalStr = adminInfo + header + guardInfo + phn + locInfo + schedule + remarks;

  return FinalStr;
}

function writeGuardsToPDF(data) {
  const allGuards = data.security.guards;
  const securityGrp = data.security;

  let filePath = null;
  let file = null;

  if(allGuards) {
    let doc = new PDFDocument({
      width: 612,
      height: 792,
      margin: 50,
    });

    filePath = `ExportedPDFs/${allGuards[0].accessID}_guards.pdf`;
    file = fs.createWriteStream(filePath, { encoding : 'utf8' });

    let stream = doc.pipe(file);
    doc.moveUp(2);
    doc.fontSize(25).text(`Guard(s) Assigned for Request: ${allGuards[0].accessID}`,{align: 'center'});

    const date = new Date();

    doc.fontSize(12);
    doc.moveDown();

    const adminData = `Date Exported: ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}\n` +
      `Total Guards Assigned: ${allGuards.length}`;

    const finalStr = parseSecurityData(securityGrp);

    doc.text(adminData, {align: 'left'});
    doc.moveDown();
    doc.text(finalStr, {align: 'left'});

    let i;

    for(i = 0; i < allGuards.length; i++) {
      doc.moveDown(2);
      doc.fontSize(12).text(`=========================================================================`, {align: 'center'});
      const guard = allGuards[i];

      const FinalStr = parseGuardData(guard, i + 1);

      doc.fontSize(12).text(FinalStr);
      doc.moveDown();

      doc.fontSize(12).text(`=========================================================================`, {align: 'center'});

    }

    doc.end();
  }

  return filePath;
}

exports.exportGuards = async function exportGuardsToPDF(reqID) {
  let data = null;
  let file = null;
  await dbMethods.getGuardsForRequest(reqID).then((resp) => {
    data = resp;
    if(data) {
      file = writeGuardsToPDF(data);
    } else {
      data = null;
    }
  });

  return file;
};
