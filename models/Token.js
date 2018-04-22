const Sequelize = require('sequelize');

module.exports = (sequelize, user) => {



    let TokenModel = sequelize.define('Token', {

    });

    TokenModel.associate = () => {
      TokenModel.hasOne(user, {as: 'user', foreignKey: 'idUser'});
    };

    return TokenModel;
};