'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Todos',
      [
        {
          name: 'make bed',
          completed: false
        },
        {
          name: 'do coding',
          completed: true
        },
        {
          name: 'implement websockets',
          completed: true
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
