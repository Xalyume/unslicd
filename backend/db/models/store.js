'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    addedBy: DataTypes.INTEGER
  }, {});
  Store.associate = function(models) {
    // associations can be defined here
  };
  return Store;
};