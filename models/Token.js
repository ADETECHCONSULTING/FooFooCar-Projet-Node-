const Sequelize = require('sequelize');

module.exports = (sequelize, user) => {



    let TokenModel = sequelize.define('Token', {
        idToken:{
            primaryKey: true,
            allowNull: false,
            autoIncrement: false,
            type: Sequelize.UUID
        },
    });

    TokenModel.associate = () => {
      TokenModel.hasOne(user, {as: 'user', foreignKey: 'idUser'});
    };

    return TokenModel;
};