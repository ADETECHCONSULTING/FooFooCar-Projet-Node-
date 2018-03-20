const Sequelize = require("sequelize");

module.exports = server => {

    //setting up the connection config
    let sequelize = new Sequelize("foofoocar", server.settings.username, server.settings.password, {
        host: server.settings.host,
        port: server.settings.port,
        dialect: server.settings.dialect
    });

    //Checking the connection status
    sequelize.authenticate().then(function (err) {
        if (err) {
            console.log('There is connection in ERROR');
        } else {
            console.log('Connection has been established successfully');
        }
    });

    server.models = {
        Car: require('./Car')(sequelize),
        User: require('./User')(sequelize)
    };
};