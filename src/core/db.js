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
const Form = Conn.define('form', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  statusDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  sfuBCID: {
    type: Sequelize.STRING,
    allowNull: false
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  requestBy: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fax: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  nameOfevent: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  licensed: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
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
    }
  },
  times: {
    type: Sequelize.STRING,
    allowNull: false,
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

//Conn.sync({ force: false});

//DEMO QUERY

Conn.sync({ force: true});


// .then(() => {
//   var datetime = new Date("2017-09-01");
//
//   return Form.create({
//     id: 0,
//     status: 'Pending',
//     statusDate: new Date(2011, 0, 1, 0, 0, 0, 0),
//     sfuBCID: 50505,
//     department: 'APPSC',
//     date: new Date(2013, 0, 1, 0, 0, 0, 0),
//     requestBy: 'Sankait',
//     phone: '7782417856',
//     fax: '',
//     email: 'sankaitk@sfu.ca',
//     nameOfevent: 'BOOM',
//     licensed: 'yes',
//     location: 'Home',
//     numberOfattendees: 10,
//     eventDates: [(new Date(2012, 0, 1, 0, 0, 0, 0)).toString(), (new Date(2019, 0, 1, 0, 0, 0, 0)).toString()],
//     times: "5:45",
//     details: 'THIS IS DETAIL',
//     accountCode: "420",
//     invoice: 32,
//     authorizedBy: 'Sankait',
//     authorizedID: '42342fkfdsf',
//     authorizedDate: new Date(2012, 2,2,0,0,0,0),
//     authorizedPhone: 7782415848
//   });
// }


export default Conn;
