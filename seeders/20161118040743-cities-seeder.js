'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // Add seeded Cities to database (all are country capitols)
    // Don't worry, I used Excel to create these formulas... Drag And Drop ;)
    return queryInterface.bulkInsert('Cities', [
      { cityName: "Dubai", cityImageURL: "http://whatson.ae/dubai/wp-content/uploads/2016/05/Dubai-2016-9838.jpg", createdAt: new Date(), updatedAt: new Date() },
      { cityName: "Kakslauttanen", cityImageURL: "http://cdn.images.express.co.uk/img/dynamic/25/590x/The-glass-igloos-624757.jpg", createdAt: new Date(), updatedAt: new Date() },
      { cityName: "Ko Samui", cityImageURL: "https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/d6/ee/ang-thong-islands-by.jpg", createdAt: new Date(), updatedAt: new Date() },
      { cityName: "Portland", cityImageURL: "https://www.travelportland.com/wp-content/uploads/2013/04/skyline1horizontal.jpg", createdAt: new Date(), updatedAt: new Date() },
      { cityName: "Key West", cityImageURL: "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/b6/key-west.jpg", createdAt: new Date(), updatedAt: new Date() },
      { cityName: "Berlin", cityImageURL: "http://i.huffpost.com/gen/1895354/thumbs/o-BERLIN-900.jpg?1", createdAt: new Date(), updatedAt: new Date() },
      { cityName: "Fira", cityImageURL: "http://i.huffpost.com/gen/1881416/thumbs/o-SANTORINI-900.jpg?6", createdAt: new Date(), updatedAt: new Date() },
      { cityName: "Florence", cityImageURL: "http://i.huffpost.com/gen/1887626/thumbs/o-FLORENCE-900.jpg?1", createdAt: new Date(), updatedAt: new Date() },
      { cityName: "New York", cityImageURL: "http://assets.fodors.com/destinations/1128/skyline-manhattan-new-york-city-new-york-usa_main.jpg", createdAt: new Date(), updatedAt: new Date() },
      { cityName: "New Orleans", cityImageURL: "https://media-cdn.tripadvisor.com/media/photo-s/06/bb/29/bd/french-quarter.jpg", createdAt: new Date(), updatedAt: new Date() },
      { cityName: "Chicago", cityImageURL: "https://3.bp.blogspot.com/-i5zK_mD4HWk/V62hV0cH0wI/AAAAAAAABlk/uDkqUNo85NAI-TAmA5UkmCWyVRl2DKttwCPcB/s1600/chicago-bean-cidade.jpg", createdAt: new Date(), updatedAt: new Date() },
    ], {});

  },

  down: function (queryInterface, Sequelize) {

    // Remove the seeded Cities (note the "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete('Cities', null, { truncate: true });

  }
};
