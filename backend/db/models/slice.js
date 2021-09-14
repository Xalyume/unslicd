'use strict';
module.exports = (sequelize, DataTypes) => {
  const Slice = sequelize.define('Slice', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    addedBy: DataTypes.INTEGER
  }, {});
  Slice.associate = function(models) {
    // associations can be defined here
  };
  return Slice;
};