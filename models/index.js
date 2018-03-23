const Sequelize = require("sequelize");

module.exports = server => {

    //setting up the connection config
    let sequelize = new Sequelize("foofoocar", server.settings.username, server.settings.password, {
        dialect: server.settings.dialect
    });


    server.models = {
        Car: require('./Car')(sequelize),
        User: require('./User')(sequelize)
    };

    sequelize.sync();
};