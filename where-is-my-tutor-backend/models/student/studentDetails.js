const { DataTypes } = require('sequelize');
const sequelize = require("../../utils/database")

const StudentDetails = sequelize.define('studentDetail', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,

  },
  firstName: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  lastName: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },

}, {

});

module.exports = Student