'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    // Add seeded Countries to database
    // Don't worry, I used Excel to create these formulas... Drag And Drop ;)
    return queryInterface.bulkInsert('Countries', [
      {countryName: "United States", countryImageURL: "http://www.nationsencyclopedia.com/photos/united-states-of-america-1087.jpg", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "Canada", countryImageURL: "https://kids.nationalgeographic.com/content/dam/kids/photos/Countries/A-G/canada-vancouver.ngsversion.1396531537595.jpg", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "Mexico", countryImageURL: "http://cdn.wallpapersafari.com/36/17/o3FOr9.jpg", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "Germany", countryImageURL: "http://www.studyabroad.com/sites/default/files/images/Summer-Study-Abroad-Germany-Programs.jpg", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "Brazil", countryImageURL: "https://news.bitcoin.com/wp-content/uploads/2018/01/Sao-Paulo.jpg", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "Argentina", countryImageURL: "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/8/Argentina-64898.jpg", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "China", countryImageURL: "http://mediad.publicbroadcasting.net/p/wcbu/files/201504/china_Great_Wall_0.jpg", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "Japan", countryImageURL: "http://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "Netherlands", countryImageURL: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSsAUUtUIzGmtFVH1qim_nmBsQaCDDDLswkMjELOZCIDOSXwqfF", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "Bahamas", countryImageURL: "http://images.nationalgeographic.com/wpf/media-live/photos/000/028/cache/bahamas_2836_600x450.jpg", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "France", countryImageURL: "https://cdn.travel-mediaserver.com/driveaway/images/car-hire/destinations/france-large.jpg", createdAt: new Date(), updatedAt: new Date()},
      {countryName: "Czech Republic", countryImageURL: "http://talentifynow.com/media/2014/10/talentifynow-czech-republic.jpg", createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: function (queryInterface, Sequelize) {

    // Remove the seeded Countries (note the "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete('Countries', null, {truncate : true});

  }
};
