'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');
// const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'demouser1',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'pizzaman123',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakerUser96',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'PDubz1AM',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'GimmeDaPie',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    // const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users');
    /* {
     username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    } */
  }
};
