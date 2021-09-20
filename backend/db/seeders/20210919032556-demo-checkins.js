'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('CheckIns', [
      {
        storeId: 1,
        userId: 1,
        sliceId: 1,
        review: 'It was a very good slice.Probably will come back soon!',
        rating: 4,
        image: 'https://woodemos.extendons.com/mixmatch/wp-content/uploads/2019/03/Cheese-Pizza-Slice.jpg',
        createdAt: new Date('2021-9-11'),
        updatedAt: new Date()
      },
      {
        storeId: 2,
        userId: 1,
        sliceId: 4,
        review: 'Since it\’s Dominos, I wasnt expecting much, even then I was disappointed.Way too greasy.!',
        rating: 2,
        image: 'https://image.freepik.com/free-vector/pizza-illustration_8319-36.jpg',
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        storeId: 10,
        userId: 1,
        sliceId: 3,
        review: 'Thought the atmosphere was great and the pie was pretty good too!',
        rating: 3,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/cb/f1/f8/barbeque-chicken-pizza.jpg',
        createdAt: new Date('2021-9-12'),
        updatedAt: new Date()
      },
      {
        storeId: 9,
        userId: 1,
        sliceId: 2,
        review: 'Wow! What a great spot, def lived up to its hype! I’d love to come back here again one day, So good I forgot to take a picture lol.',
        rating: 5,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/cb/f1/f8/barbeque-chicken-pizza.jpg',
        createdAt: new Date('2021-9-13'),
        updatedAt: new Date()
      },
      {
        storeId: 5,
        userId: 3,
        sliceId: 10,
        review: 'just came randomly, didnt expect to be this good!',
        rating: 3,
        image: 'https://image.freepik.com/free-vector/pizza-illustration_8319-36.jpg',
        createdAt: new Date('2021-9-19'),
        updatedAt: new Date()
      },
      {
        storeId: 6,
        userId: 4,
        sliceId: 5,
        review: 'it was pretty good',
        rating: 2,
        image: 'https://image.freepik.com/free-vector/pizza-illustration_8319-36.jpg',
        createdAt: new Date('2021-9-18'),
        updatedAt: new Date()
      },
      {
        storeId: 8,
        userId: 1,
        sliceId: 2,
        review: 'just ordered some for the nostalgia',
        rating: 3,
        image: 'https://i0.wp.com/www.theimpulsivebuy.com/wordpress/wp-content/uploads/2019/06/Pizza-Hut-Original-Pan-Pizza-2019-Slice.jpg?resize=600%2C450&ssl=1',
        createdAt: new Date('2021-9-17'),
        updatedAt: new Date()
      },
      {
        storeId: 4,
        userId: 1,
        sliceId: 5,
        review: 'got it from a recommendation from a friend, i think i like my slices with more sauce though.',
        rating: 4,
        image: 'https://image.freepik.com/free-vector/pizza-illustration_8319-36.jpg',
        createdAt: new Date('2021-9-15'),
        updatedAt: new Date()
      },
      {
        storeId: 8,
        userId: 4,
        sliceId: 2,
        review: 'it was okay. Could be better, a bit dried out',
        rating: 2,
        image: 'https://image.freepik.com/free-vector/pizza-illustration_8319-36.jpg',
        createdAt: new Date('2021-9-10'),
        updatedAt: new Date()
      },
      {
        storeId: 7,
        userId: 1,
        sliceId: 8,
        review: 'came in for a quick bite after getting my haircut.Still the same ole same ole Helen\'s slice.',
        rating: 3,
        image: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1200,height=1200,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/photos/399cb299-ce45-40eb-973d-35749e7bffde-retina-large.jpg',
        createdAt: new Date('2021-9-12'),
        updatedAt: new Date()
      },
      {
        storeId: 3,
        userId: 3,
        sliceId: 7,
        review: 'the bottom was a bit burnt on my pie this time.',
        rating: 2,
        image: 'https://image.freepik.com/free-vector/pizza-illustration_8319-36.jpg',
        createdAt: new Date('2021-9-13'),
        updatedAt: new Date()
      },
      {
        storeId: 4,
        userId: 1,
        sliceId: 2,
        review: 'quick bite to eat. wait was a bit long but was def worth.',
        rating: 4,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/18/b3/ed/f9/pizza.jpg',
        createdAt: new Date('2021-9-11'),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(
      'CheckIns',
      null,
      { truncate: true, cascade: true, restartIdentity: true }
    );
  }
};
