const Sequelize = require('sequelize');

module.exports = (sequelize, user) => {



    let TokenModel = sequelize.define('Token', {
        idToken:{
            primaryKey: true,
            allowNull: false,
            autoIncrement: false,
            type: Sequelize.UUID
        },
        idUser: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: 'Users', //name of Target model
                key: 'idUser' //key in target model that we're adding
            }
        }
    });

    TokenModel.associate = models => {
        TokenModel.belongsTo(models.User);
    };
    return TokenModel;
};