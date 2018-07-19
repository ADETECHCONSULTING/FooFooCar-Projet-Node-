const Sequelize = require('sequelize');

module.exports = (sequelize, server) => {



    let TokenModel = sequelize.define('token', {
        id:{
            primaryKey: true,
            type: Sequelize.STRING(50)
        }
    });


    return TokenModel;
};