import db from '../core/db';

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
    times: req.body.time,
  });

  db.models.security.create({
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
    securityDbID: commonDbID,
    status: 'Pending',
    statusDate: new Date(),
    date: req.body.date,
    details: req.body.detail,
    accountCode: req.body.accountCode,
    invoice: 99999,
    authorizedBy: req.body.authorizedBy,
    authorizedID: req.body.authorizedID,
    authorizedDate: req.body.authorizedDate,
    authorizedPhone: req.body.authorizedPhone,
  });
}

function createGuards(req) {
  let x;
  const allGuards = [];

  if(req.body.dispatchNumber instanceof Array) {
    for (x = 0; x < req.body.dispatchNumber.length; x++) {
      allGuards.push({
        dispatchNumber: req.body.dispatchNumber[x],
        location: req.body.location[x],
        startDate: req.body.startDate[x],
        endDate: req.body.startDate[x],
        guardname: req.body.name[x],
        telephone: req.body.phone[x],
        accessID: req.body.requestID,
        remarks: req.body.remarks[x + 1],
      });
    }
  } else {
    allGuards.push({
      dispatchNumber: req.body.dispatchNumber,
      location: req.body.location,
      startDate: req.body.startDate,
      endDate: req.body.startDate,
      guardname: req.body.name,
      telephone: req.body.phone,
      accessID: req.body.requestID,
      remarks: req.body.remarks[1],
    });
  }

  return allGuards;
}

function commitApproveToDB(req) {

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

  // Clear all the previous guards from a security group
  db.models.guard.destroy({
    where: {
      accessID: req.body.requestID
    },
  });

  // Update the guards for the security group
  let allGuards = createGuards(req);

  let x;
  for (x in allGuards) {
    db.models.guard.upsert(allGuards[x]);
  }

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
