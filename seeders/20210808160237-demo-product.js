'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription() ,
      price: faker.commerce.price(),
      rating: 4,
      images: faker.image.imageUrl(),
      article_nummer: faker.datatype.number(),
      category: 'ropa',
      colors: faker.commerce.colors,
      sizes: 'xl',
      sold: faker.datatype.number(),
      storage_amount: faker.datatype.number(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};