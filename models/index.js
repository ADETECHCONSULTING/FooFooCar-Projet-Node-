const Sequelize = require("sequelize");

module.exports = server => {

    //setting up the connection config
    let sequelize = new Sequelize(server.settings.db_name, server.settings.username, server.settings.password, {
        dialect: server.settings.dialect
    });


    //Models creations if not exists
    server.models = {
        Car: require('./Car')(sequelize),
        User: require('./User')(sequelize)
    };

    sequelize.sync();
};