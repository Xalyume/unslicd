'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Slices', [
      {
        name: 'Cheese Slice',
        description: 'slice with just cheese and tomato sauce',
        addedBy: 3
      },
      {
        name: 'Pepperoni Slice',
        description: 'slice with pepperoni',
        addedBy: 4
      },
      {
        name: 'BBQ Chicken',
        description: 'has bbq and chicken, light on the tomato sauce and cheese',
        addedBy: 2
      },
      {
        name: 'Meat Lovers Pizza',
        description: 'LOTS of assorted meats on the slice.',
        addedBy: 1
      },
      {
        name: 'White Slice',
        description: 'It’s like a cheese slice without with the tomato sauce and extra cheese.’',
        addedBy: 1
      },
      {
        name: 'Buffalo Slice',
        description: 'slice with just cheese and tomato sauce',
        addedBy: 3
      },
      {
        name: 'Hawaiian Slice',
        description: 'Cheese and sauce and pineapple and ham. Oh my!',
        addedBy: 3
      },
      {
        name: 'Sausage and Onions',
        description: 'The slice has italian sausage and onions, usually thinly sliced and diced',
        addedBy: 1
      },
      {
        name: 'Mushroom',
        description: 'Regular slice with just mushrooms',
        addedBy: 1
      },
      {
        name: 'Supreme',
        description: 'Called the supreme cause it has almost everything you can think of, fit into a slice of pizza.',
        addedBy: 1
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(
      'Slices',
      null,
      { truncate: true, cascade: true, restartIdentity: true }
    );
  }

};
