/* dbCommitMethods.js
** This file concerns the database logic
*/

import db from '../data/db';

var NUM = '0000';
var YEAR = '00';

function uniqueID() {
  var d = new Date();
  var abbrevYear = d.getFullYear().toString().slice(-2);

  var oldYear = parseInt(YEAR);
  abbrevYear = parseInt(abbrevYear);

  if (oldYear < abbrevYear) {
    YEAR = abbrevYear.toString();
    NUM = '0000';
  }

  return String(abbrevYear) + '-' + IncNum();
}

function IncNum() {
  var int_num = parseInt(NUM);

  if (int_num !== null && int_num < 10000) {
    int_num += 1;
  }

  NUM = String(int_num);

  while (NUM.length < 4) {
    NUM = '0' + NUM;
  }
  return NUM;
}

function getCurrDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDay();

  return year + '-' + month + '-' + day;
}

function getCommonDBID() {
  const date = new Date();

  return parseInt(String(date.getTime()).slice(-7) + String(date.getMinutes()));
}

function getSecurityGrpID() {
  const date = new Date();

  return parseInt(String(date.getTime()).slice(-3) + String(date.getSeconds()));
}

function commitRequestToDB(req) {
  const commonDbID = getCommonDBID();
  const uni_ID = uniqueID();

  db.models.user.create({
    dbID: commonDbID,
    sfuBCID: req.body.id,
    department: req.body.department,
    requestBy: req.body.requestBy,
    phone: req.body.phone,
    fax: req.body.fax,
    email: req.body.email,
    licensed: req.body.licensed,
  });

  db.models.event.create({
    dbID: commonDbID,
    nameOfEvent: req.body.nameOfEvent,
    location: req.body.location,
    numberOfattendees: req.body.numberOfAttendees,
    eventDates: [req.body.eventDate],   // TODO: CONFIRM DATES ARE JOINED BY ';'
    secondDate: req.body.secondDate,
    thirdDate: req.body.thirdDate,
    fourthDate: req.body.fourthDate,
    fifthDate: req.body.fifthDate,
    times: req.body.time,
    endTime: req.body.endtime,
  });

  db.models.security.create({
    groupID: getSecurityGrpID(),
    accessID: uni_ID,
    dbID: commonDbID,
    supervisor: "none",
    distribution: "none",
    guardRegularRate: 0,
    guardRegularHours: 0,
    guardOTRate: 0,
    guardOTHours: 0,
    scspRegularRate: 0,
    scspRegularHours: 0,
    scspOTRate: 0,
    scspOTHours: 0,
    totalGuardBillable: 0,
    totalSCSPBillable: 0,
    preparedBy: "none",
    remarks: "none",
  });

  db.models.request.create({
    accessID: uni_ID,
    dbID: commonDbID,
    eventDbID: commonDbID,
    userDbID: commonDbID,
    securityAccessID: uni_ID,
    status: 'Pending',
    statusDate: new Date(),
    date: req.body.date,
    details: req.body.detail,
    accountCode: req.body.accountCode,
    invoice: req.body.invoice,
    authorizedBy: req.body.authorizedBy,
    authorizedID: req.body.authorizedID,
    authorizedDate: req.body.authorizedDate,
    authorizedPhone: req.body.authorizedPhone,
    emergencyContact: req.body.emergencyContact,
  });
}

function getGuardSchedule(req, x) {
  const index = `date_${x}`;
  const dateObj = req.body[index];

  if(dateObj) {
    const assignedDates = dateObj.assignedDate;
    const startTimes = dateObj.startTime;
    const endTimes = dateObj.endTime;

    if(assignedDates instanceof Array) {
      let x;
      let schedules = [];
      for(x = 0; x < assignedDates.length; x++) {
        const date = assignedDates[x];
        const sttime = startTimes[x];
        const edtime = endTimes[x];

        const finalStr = date + "?" + sttime + "?" + edtime;

        schedules.push(finalStr);
      }

      return schedules;
    } else {
      const schedules = [];
      schedules.push(`${assignedDates}?${startTimes}?${endTimes}`);

      return schedules;
    }
  } else {
    return [];
  }
}

function createGuards(req, grpID) {
  let x;
  const allGuards = [];

  if(req.body.dispatchNumber.length <= 0) {
    return null;
  }

  if(req.body.dispatchNumber instanceof Array) {
    for (x = 0; x < req.body.dispatchNumber.length; x++) {

      const scheduleArray = getGuardSchedule(req, x);
      allGuards.push({
        groupID: grpID,
        dispatchNumber: req.body.dispatchNumber[x],
        location: req.body.location[x],
        schedule: scheduleArray,
        guardname: req.body.name[x],
        telephone: req.body.phone[x],
        accessID: req.body.requestID,
        remarks: req.body.remarks[x + 1],
        grdType: req.body.grdType[x],
      });
    }
  } else {
    allGuards.push({
      groupID: grpID,
      dispatchNumber: req.body.dispatchNumber,
      location: req.body.location,
      schedule: ["NOT DEFINED"],
      guardname: req.body.name,
      telephone: req.body.phone,
      accessID: req.body.requestID,
      remarks: req.body.remarks[1],
      grdType: req.body.grdType,
    });
  }

  return allGuards;
}

function commitApproveToDB(req) {

  const grpID = getSecurityGrpID();
  // Update the security group details
  db.models.security.update({
      supervisor: req.body.supervisor,
      distribution: req.body.distribution,
      guardRegularRate: req.body.guardRegularRate,
      guardRegularHours: req.body.guardRegularHours,
      guardOTRate: req.body.guardOTRate,
      guardOTHours: req.body.guardOTHours,
      scspRegularRate: req.body.scspRegularRate,
      scspRegularHours: req.body.scspRegularHours,
      scspOTRate: req.body.scspOTRate,
      scspOTHours: req.body.scspOTHours,
      totalGuardBillable: req.body.totalGuardBillable,
      totalSCSPBillable: req.body.totalSCSPBillable,
      preparedBy: req.body.preparedBy,
      remarks: req.body.remarks[0],
    },
    { where: { accessID: req.body.requestID } },
  );

  db.models.security.findOne({ where: { accessID: req.body.requestID } }).then((security) => {
    // Clear all the previous guards from a security group
    db.models.guard.destroy({
      where: {
        groupID: security['groupID'],
      },
    }).then(() => {
      if(req.body.dispatchNumber) {
        // Update the guards for the security group
        let allGuards = createGuards(req, security.groupID);

        let x;
        for (x in allGuards) {
          db.models.guard.findOrCreate({where: allGuards[x]});
        }
      }
    });
  });


  // updating request status
  db.models.request.update(
    {
      status : 'Accepted',
    },
    { where: { accessID: req.body.requestID } },
  );
}

module.exports = {
  commitApproveToDB,
  commitRequestToDB,
};
