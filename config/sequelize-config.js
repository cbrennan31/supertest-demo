const Sequelize = require('sequelize');
const dotEnv = require('dotenv').config();

const sequelize = new Sequelize(
  process.env.AZURE_DATABASE,
  process.env.AZURE_USERNAME,
  process.env.AZURE_PASSWORD,
  {
    host: process.env.AZURE_SERVER,
    dialect: 'mssql',
    timeout: 100000,
    dialectOptions: {
      encrypt: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  }
);

module.exports = { sequelize };
