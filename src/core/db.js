import Sequelize from 'sequelize';

const Conn = new Sequelize(
  'demoDB',
  'root',
  'password',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
);

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
  // date: {
  //   type: Sequelize.DATE,
  //   allowNull: false
  // },
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
    allowNull: false

    //ADD VALIDATE FUNCTION
  },
  nameOfevent: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  licensed: {
    type: Sequelize.INTEGER,
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
  // eventDates: {
  //   type: [Sequelize.DATE],
  //   allowNull: false
  //
  //   //CHECK IF IT HAS TO BE A LIST
  // }
});

Conn.sync({ force: true}).then(() => {
  var datetime = new Date("2017-09-01");

  return Form.create({
    id: 0,
    status: 'Pending',
    statusDate: new Date(2011, 0, 1, 0, 0, 0, 0),
    sfuBCID: 50505,
    department: 'APPSC',
    requestBy: 'Sankait',
    phone: '7782417856',
    fax: '',
    email: 'sankaitk@sfu.ca',
    nameOfevent: 'BOOM',
    licensed: 100,
    location: 'Home',
    numberOfattendees: 10,
  })
});


export default Conn;
