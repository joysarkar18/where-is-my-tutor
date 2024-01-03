const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database")

const User = sequelize.define('user', {
  id:{
    primaryKey:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,

  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
   
  }
}, {
 
});

module.exports = User