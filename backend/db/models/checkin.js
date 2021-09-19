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

    // CheckIn belongsTo one User, Store, Slice
    CheckIn.belongsTo(models.User, {foreignKey: "userId"})
    CheckIn.belongsTo(models.Store, {foreignKey: "storeId"})
    CheckIn.belongsTo(models.PizzaSlice, {foreignKey: "sliceId"})
  };
  return CheckIn;
};
