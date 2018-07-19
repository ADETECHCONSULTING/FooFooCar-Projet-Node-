const Sequelize = require("sequelize");

module.exports = server => {

    //setting up the connection config
    let sequelize = new Sequelize(server.settings.db_name, server.settings.username, server.settings.password, {
        dialect: server.settings.dialect
    });


    const UserModel = require('./User')(sequelize);
    const CarModel = require('./Car')(sequelize);
    const TokenModel = require('./Token')(sequelize);

    UserModel.hasOne(TokenModel, {as: 'token', foreignKey: 'user_id'});

    //Models creations if not exists
    server.models = {
        Car: CarModel,
        User: UserModel,
        Token: TokenModel
    };

    sequelize.sync()
        .catch(e => console.log(e))
};