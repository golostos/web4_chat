// @ts-check
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../services/db.service');

class Message extends Model { }

Message.init({
    // Model attributes are defined here
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Message' // We need to choose the model name
});

module.exports = Message