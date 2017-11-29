import Sequelize from 'sequelize';
import findRemoveSync from 'find-remove';


// Add your configuration for the DB
const Conn = new Sequelize(
  'demodb', //Name of database initalized in mySQL
  'root', //Username to access db
  'ymj8899174', //Your mySQL DB password
  {
    dialect: 'mysql',
    host: 'localhost',
    logging: false,
  }
);

//DB TABLE DEFINITIONS
const User = Conn.define('user', {
  dbID: {
    type: Sequelize.INTEGER,
    allowNull: true,
    primaryKey: true,
  },
  sfuBCID: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  requestBy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fax: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  licensed: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Request = Conn.define('request', {
  accessID: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  dbID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  statusDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  details: {
    type: Sequelize.STRING,
    allowNull: true
  },
  accountCode: {
    type: Sequelize.STRING,
    allowNull: true
  },
  invoice: {
    type: Sequelize.STRING,
    allowNull: false
  },
  authorizedBy: {
    type: Sequelize.STRING,
    allowNull: false
  },
  authorizedID: {
    type: Sequelize.STRING,
    allowNull: true
  },
  authorizedDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  authorizedPhone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  emergencyContact: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

const Event = Conn.define('event', {
  dbID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nameOfEvent: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true
  },
  numberOfattendees: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  eventDates: {
    type: Sequelize.STRING,
    allowNull: false,

    set: function (val) {
      this.setDataValue('eventDates',val.join(';'));
    },
  },
  secondDate: {
    type: Sequelize.STRING,
    allowNull:true,
  },
  thirdDate: {
    type: Sequelize.STRING,
    allowNull:true,
  },
  fourthDate: {
    type: Sequelize.STRING,
    allowNull:true,
  },
  fifthDate: {
    type: Sequelize.STRING,
    allowNull:true,
  },
  times: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endTime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Guard = Conn.define('guard', {
  groupID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  accessID: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dispatchNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  guardname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telephone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  remarks: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  grdType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['groupID', 'dispatchNumber'],
    },
  ],
});

const Security = Conn.define('security', {
  groupID: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
  accessID: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  dbID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  supervisor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  distribution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  guardRegularRate: {
    type: Sequelize.FLOAT.UNSIGNED,
    allowNull: false,
  },
  guardRegularHours: {
    type: Sequelize.FLOAT.UNSIGNED,
    allowNull: false,
  },
  guardOTRate: {
    type: Sequelize.FLOAT.UNSIGNED,
    allowNull: false,
  },
  guardOTHours: {
    type: Sequelize.FLOAT.UNSIGNED,
    allowNull: false,
  },
  scspRegularRate: {
    type: Sequelize.FLOAT.UNSIGNED,
    allowNull: false,
  },
  scspRegularHours: {
    type: Sequelize.FLOAT.UNSIGNED,
    allowNull: false,
  },
  scspOTRate: {
    type: Sequelize.FLOAT.UNSIGNED,
    allowNull: false,
  },
  scspOTHours: {
    type: Sequelize.FLOAT.UNSIGNED,
    allowNull: false,
  },
  totalGuardBillable: {
    type: Sequelize.FLOAT.UNSIGNED,
    allowNull: false,
  },
  totalSCSPBillable: {
    type: Sequelize.FLOAT.UNSIGNED,
    allowNull: false,
  },
  preparedBy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  remarks: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});


Event.hasOne(Request);
User.hasOne(Request);


Request.belongsTo(Security);
Request.belongsTo(Event);
Request.belongsTo(User);

Security.hasMany(Guard, {foreignKey: "groupID", sourceKey: "groupID"});
Guard.hasMany(Security,  {foreignKey: "groupID", sourceKey: "groupID"});

// TODO: REPLACE FORCE PARAM
// //FOR DEPLOYING
// Conn.sync({ force: false});

//FOR TESTING
Conn.sync({ force: true}).then(() => {
  findRemoveSync('ExportedCSVs/', {files: '*.*'});
  findRemoveSync('ExportedPDFs/', {files: '*.*'});
  console.log('Cleaned up temporary export directories.');
});

export default Conn;
