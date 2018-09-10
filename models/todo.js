const Sequelize = require('sequelize');
const { sequelize } = require('../config/sequelize-config');

const Todo = sequelize.define(
  'todo',
  {
    name: {
      type: Sequelize.STRING
    },
    completed: {
      type: Sequelize.BOOLEAN
    }
  },
  { timestamps: false }
);

module.exports = Todo;
