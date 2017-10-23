import Sequelize from 'sequelize';

// Add your configuration for DB
const Conn = new Sequelize(
  'demodb',
  'root',
  'laroiya@1996',
  {
    dialect: 'mysql',
    host: 'localhost',
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

Request.belongsTo(Event);
Request.belongsTo(User);


//FOR DEPLOYING
//Conn.sync({ force: false});

//FOR TESTING
Conn.sync({ force: true});

export default Conn;
