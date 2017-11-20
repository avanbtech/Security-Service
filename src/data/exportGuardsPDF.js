import PDFDocument from 'pdfkit';
import fs from 'fs';

import dbMethods from './dbFetchMethods';

function writeGuardsToPDF(allGuards) {
  let filePath = null;
  let file = null;

  if(allGuards) {
    let doc = new PDFDocument({
      width: 612,
      height: 792,
      margin: 50,
    });

    filePath = `ExportedPDFs/${allGuards[0].accessID}_guards.pdf`;
    file = fs.createWriteStream(filePath, { encoding : 'utf8' })

    let stream = doc.pipe(file);
    doc.moveUp(2);
    doc.fontSize(25).text(`Guard(s) Assigned for Request: ${allGuards[0].accessID}`,{align: 'center'});

    const date = new Date();

    doc.fontSize(12)
    doc.moveDown();

    const adminData = `Date Exported: ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}\n` +
      `Total Guards Assigned: ${allGuards.length}`;

    doc.text(adminData, {align: 'left'});

    let i;

    for(i = 0; i < allGuards.length; i++) {
      doc.moveDown(2);
      doc.fontSize(12).text(`=========================================================================`, {align: 'center'});
      const guard = allGuards[i];
      const header = `Guard #${i + 1}\n`;
      const adminInfo = `Security Group: ${guard.groupID}\n`;
      const guardInfo = `     Name: ${guard.guardname}\n     Dispatch Number: ${guard.dispatchNumber}\n`;
      const phn = `     Phone Number: ${guard.telephone}\n`;
      const locInfo = `     Location: ${guard.location}\n`;
      const dates = `     Start Date: ${guard.startDate.split('T')[0]}     End Date: ${guard.endDate.split('T')[0]}\n`;
      const remarks = `     Remarks: ${guard.remarks}`;

      const FinalStr = adminInfo + header + guardInfo + phn + locInfo + dates + remarks;

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


