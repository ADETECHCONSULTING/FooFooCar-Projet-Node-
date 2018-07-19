const Sequelize = require("sequelize");

module.exports = server => {

    //setting up the connection config
    let sequelize = new Sequelize(server.settings.db_name, server.settings.username, server.settings.password, {
        dialect: server.settings.dialect
    });


    const UserModel = require('./User')(sequelize);
    const CarModel = require('./Car')(sequelize);
    const TokenModel = require('./Token')(sequelize);
    const TripModel = require('./Trip')(sequelize);



    UserModel.hasOne(TokenModel, {as: 'token', foreignKey: 'user_id'});

    //UserModel.hasMany(TripModel, {as: 'participants', foreign_key: 'participants'});
    UserModel.hasOne(TripModel, {as: 'driver', foreign_key: 'driver_id'});

    CarModel.hasOne(TripModel, {as: 'car', foreign_key: 'car_id'});

    UserModel.hasMany(CarModel, {as: 'cars'});

    //Models creations if not exists
    server.models = {
        Car: CarModel,
        User: UserModel,
        Token: TokenModel,
        Trip: TripModel
    };

    server.models.Trip.statuses = {
        NotStarted: 0,
        Started: 1,
        Finished: 2
    };

    sequelize.sync()
        .catch(e => console.log(e))
};