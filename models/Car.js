const Sequelize = require('sequelize');
module.exports = (sequelize) => {

    //Creation du model
    let CarModel = sequelize.define("Car", {
        idCar:{
            primaryKey: true,
            allowNull: false,
            autoIncrement: false,
            type: Sequelize.UUID
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "BMW"
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "White"
        },
        seats: {
            type: Sequelize.INTEGER,
            required: true,
            defaultValue: 2
        }
    });

    CarModel.associate = models => {
        CarModel.belongsTo(models.User);
    };

    return CarModel;
};
