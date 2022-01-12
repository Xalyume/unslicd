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
        profilePicture: 'https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg'
      },
      {
        email: 'pizza@pizza.io',
        username: 'pizzaman123',
        hashedPassword: bcrypt.hashSync('password1'),
        profilePicture: 'https://i2.wp.com/cariblens.com/wp-content/uploads/2021/04/cute-pizza-cartoon-vector-icon-illustration-fast-food-icon-concept-flat-cartoon-style_138676-2588.jpg?resize=626%2C600&ssl=1'
      },
      {
        email: 'fake@email.com',
        username: 'FakerUser96',
        hashedPassword: bcrypt.hashSync('password2'),
        profilePicture: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=3752&h=1876&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F05%2F12170411%2Fcat-kitten-138468381.jpg'
      },
      {
        email: 'anotheremail@email.com',
        username: 'PDubz1AM',
        hashedPassword: bcrypt.hashSync('password3'),
        profilePicture: 'https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg'
      },
      {
        email: 'pizzapie@email.com',
        username: 'GimmeDaPie',
        hashedPassword: bcrypt.hashSync('password4'),
        profilePicture: 'https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg'
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
