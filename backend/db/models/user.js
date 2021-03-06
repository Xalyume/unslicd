'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg"
    }
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] },
        },
        loginUser: {
          attributes: {},
        },
      },
    });
  User.associate = function (models) {
    // associations can be defined here

    // User hasMany Slices, Stores, Checkins
    User.hasMany(models.PizzaSlice, { foreignKey: 'addedBy' })
    User.hasMany(models.Store, { foreignKey: 'addedBy' })
    User.hasMany(models.CheckIn, { foreignKey: 'userId' })
  };
  User.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
    const { id, username, email, createdAt, profilePicture } = this; // context will be the User instance

    return { id, username, email, createdAt, profilePicture };
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };
  User.signup = async function ({ username, email, password, profilePicture }) {
    const hashedPassword = bcrypt.hashSync(password);
    let user;
    if (profilePicture === "") {
      user = await User.create({
        username,
        email,
        hashedPassword,
      });
    } else {
      user = await User.create({
        username,
        email,
        hashedPassword,
        profilePicture
      });
    }
    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};
