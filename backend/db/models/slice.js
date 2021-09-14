'use strict';
module.exports = (sequelize, DataTypes) => {
  const Slice = sequelize.define('Slice', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    addedBy: DataTypes.INTEGER
  }, {});
  Slice.associate = function (models) {
    // associations can be defined here

    // Slice belongsTo one User (added by One User)
    Slice.belongsTo(models.User, { foreignKey: 'addedBy' })
  };
  return Slice;
};
