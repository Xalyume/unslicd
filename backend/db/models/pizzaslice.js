'use strict';
module.exports = (sequelize, DataTypes) => {
  const PizzaSlice = sequelize.define('PizzaSlice', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    addedBy: DataTypes.INTEGER
  }, {});
  PizzaSlice.associate = function(models) {
    // associations can be defined here

    // belongsTo one user
    PizzaSlice.belongsTo(models.User, { foreignKey: 'addedBy' })

    // hasMany Checkins
    PizzaSlice.hasMany(models.CheckIn, { foreignKey: "sliceId" })
  };
  return PizzaSlice;
};
