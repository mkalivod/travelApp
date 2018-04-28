'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // Add seeded States to database
    return queryInterface.bulkInsert('States', [
      {stateName: "Washington", stateImageURL: "https://kids.nationalgeographic.com/content/dam/kids/photos/States/O-W/washington-mount-rainier.ngsversion.1484171679104.adapt.1900.1.jpg", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "Alaska", stateImageURL: "http://s3.amazonaws.com/alaskasnowboardguides/bg-home-top.jpg", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "Arizona", stateImageURL: "http://images.nationalgeographic.com/wpf/media-live/photos/000/129/cache/arizona-monument-valley_12941_600x450.jpg", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "Texas", stateImageURL: "http://www.statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/TexasOurTexas.jpg", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "California", stateImageURL: "https://media-cdn.tripadvisor.com/media/photo-s/01/18/0c/d5/california.jpg", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "Colorado", stateImageURL: "http://coloradohighlifetours.com/wp-content/uploads/2014/04/Welcome-to-Colorado-.png", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "Florida", stateImageURL: "https://i.ytimg.com/vi/5LJT0DF3pzM/maxresdefault.jpg", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "Kansas", stateImageURL: "http://www.barteverettphotography.com/images/K-LoneTreeKS-2840.jpg", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "Maine", stateImageURL: "https://downeast.com/wp-content/uploads/2017/07/DEE1708Harbor1.jpg", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "Hawaii", stateImageURL: "http://prodigy.umbrella.al/travel1/wp-content/uploads/sites/9/2014/08/hawaii.jpeg", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "New Mexico", stateImageURL: "http://www.nmmha.com/uploads/8/9/5/7/8957679/4878453.jpg?485", createdAt: new Date(), updatedAt: new Date()},
      {stateName: "Michigan", stateImageURL: "https://www.michigan.gov/images/som/jobSeekersFeature_520001_7.jpg", createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    
    // Remove the seeded States (note the "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete('States', null, {truncate : true});

  }
};
