const { DataTypes } = require('sequelize');
const sequelize = require("../../utils/database")

const Student = sequelize.define('student', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,

  },
  userName: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,

  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {

});

module.exports = Student