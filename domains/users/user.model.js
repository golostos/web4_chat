// @ts-check
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../services/db.service');
const Message = require('../messages/message.model');

class User extends Model { }

User.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

User.hasMany(Message)

module.exports = User