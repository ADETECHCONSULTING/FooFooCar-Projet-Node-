const Sequelize = require('sequelize');
module.exports = (sequelize) => {

    //Creation du model
    let CarModel = sequelize.define("car", {
        id:{
            primaryKey: true,
            type: Sequelize.STRING(50)
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


    return CarModel;
};
