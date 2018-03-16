module.exports = server => {
    server.settings = require('./settings');

    server.settings.port = process.env.PORT || server.settings.port;
    server.settings.db_uri = process.env.MONGO_DB || server.settings.db_uri;
};