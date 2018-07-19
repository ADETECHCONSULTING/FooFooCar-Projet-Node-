const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    //const Car = server.models.Car;

    let TripModel = sequelize.define("trip", {
        id:{
            primaryKey: true,
            type: Sequelize.STRING(50)
        },
        start: {
            type: Sequelize.STRING,
            allowNull: false
        },
        end: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.INTEGER
        }
    });

    return TripModel;


};

