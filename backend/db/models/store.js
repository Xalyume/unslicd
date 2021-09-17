'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    addedBy: DataTypes.INTEGER
  }, {});
  Store.associate = function (models) {
    // associations can be defined here

    //Store belongsTo one User
    Store.belongsTo(models.User, { foreignKey: 'addedBy' })

    //Store hasMany CheckIns
    Store.hasMany(models.CheckIn, { foreignKey: "storeId" })
  };
  return Store;
};
