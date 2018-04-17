'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


    return queryInterface.addColumn(
        'Cars', //name of source model
        'IdUser', //name of the key we're adding
        {
          type: Sequelize.UUID,
          references: {
            model: 'Users', //name of Target model
            key: 'idUser' //key in target model that we're adding
          },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        }
    );

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
        'Cars', //name of the source model
        'idUser', //key we want to remove
    )
  }

};
