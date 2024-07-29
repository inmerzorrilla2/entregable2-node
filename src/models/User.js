const { DataType } = require('sequelize')
const sequelize = require('../utils/connection')

const User = sequelize.define('user' {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },

    firstName: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }

});

module.exports = User;