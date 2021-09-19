'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Stores', [
      {
        name: 'Mad Greek Pizza',
        location: 'Philadelphia, PA',
        description: 'located near 2 universities, great place to grab pizza and wings',
        addedBy: 2,
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        name: 'Dominos',
        location: 'Various',
        description: 'probably the biggest pizza franchise in the world.Has a great deal on pizzas, chicken, pastas, and sandwiches',
        addedBy: 1,
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        name: 'Big Red Tomato',
        location: 'Fort Lee, NJ',
        description: 'a small homely Italian restaurant that serves a mean pasta and an even meaner pizza',
        addedBy: 1,
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        name: 'Prince St Pizza',
        location: 'New York, NY',
        description: 'Considered a historic landmark to many, this place serves up an unbelievable slice that attracts both tourist and New Yorker alike.',
        addedBy: 1,
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        name: 'Eddie\'s Pizza',
        location: 'Stockton, CA',
        description: 'A staple to the neighborhood, this place continues to attract old regulars and new customers every day.',
        addedBy: 3,
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        name: 'Di Fara Pizza',
        location: 'Brooklyn, NY',
        description: 'A favorite for the locals in the area, most consider it the king of by - the - slice pizza places in New York',
        addedBy: 1,
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        name: 'Helen\'s Pizza',
        location: 'Jersey City, NJ',
        description: 'the best place in the area to get a cheap quick slice, has great variety both in and out of pizza',
        addedBy: 4,
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        name: 'Pizza Hut',
        location: 'Various',
        description: 'a widespread franchise that\'s known for their pan buttery crust and lunch pizza buffets',
        addedBy: 1,
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        name: 'Grimaldi\s',
        location: 'Brooklyn, NY',
        description: 'perhaps the most famous pizza spot in all of New York in recent history, the pizza\'s flavor is as deep as it\'s history, and will almost certainly be always worth the wait.',
        addedBy: 2,
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        name: 'Savas',
        location: 'Philadelphia, PA',
        description: 'located right next to Mad Greek Pizza, these 2 spots continuously fight over the affection of the surrounding college students. Sava\’s offers a finer diner experience with more artisan pies.',
        addedBy: 3,
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(
      'Stores',
      null,
      { truncate: true, cascade: true, restartIdentity: true }
    );
  }

};
