import Sequelize from 'sequelize';

const Conn = new Sequelize(
  'demoDB',
  'root',
  'laroiya@1996',
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
    type: Sequelize.STRING,
    allowNull: true
  }
});

Conn.sync({ force: false});


export default Conn;
