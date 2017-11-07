import Sequelize from 'sequelize';

// Add your configuration for DB
const Conn = new Sequelize(
  'demodb',
  'root',
  'YOUR PASSWORD HERE',
  {
    dialect: 'mysql',
    host: 'localhost', //VM IP ADDRESS: '142.58.21.62',
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
    allowNull: false,
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
    allowNull: false
  },
  invoice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  authorizedBy: {
    type: Sequelize.STRING,
    allowNull: false
  },
  authorizedID: {
    type: Sequelize.STRING,
    allowNull: false
  },
  authorizedDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  authorizedPhone: {
    type: Sequelize.STRING,
    allowNull: false
  }
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
  times: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Guard = Conn.define('guard', {
  accessID: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dispatchNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
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
});

const Security = Conn.define('security', {
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

Request.belongsTo(Event);
Request.belongsTo(User);
Request.belongsTo(Security);
Security.hasMany(Guard, {foreignKey: "accessID", sourceKey: "accessID"});

//FOR DEPLOYING
//Conn.sync({ force: false});

//FOR TESTING
Conn.sync({ force: true});

export default Conn;
