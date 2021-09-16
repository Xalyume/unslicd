'use strict';
module.exports = (sequelize, DataTypes) => {
  const CheckIn = sequelize.define('CheckIn', {
    storeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    sliceId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {});
  CheckIn.associate = function(models) {
    // associations can be defined here
  };
  return CheckIn;
};