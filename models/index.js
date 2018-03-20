const Sequelize = require("sequelize");

module.exports = server => {
    const sequelize = new Sequelize(server.settings.db_uri);

    server.models = {
        Car: require('./Car')(server, sequelize),
        User: require('./User')(server, sequelize)
    }
};