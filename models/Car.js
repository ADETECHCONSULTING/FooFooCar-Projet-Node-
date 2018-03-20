const Sequelize = require('sequelize');
module.exports = (sequelize) => {

    //Creation du model
    const CarModel = sequelize.define("car", {
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

/*    CarModel.associate = (models) => {
        models.Car.hasOne(models.User);
    }*/


    sequelize.sync({force: true}).then((err) => {
        if(err){
            console.log("An error occurred while creating the table");
        }else{
            console.log("Table created successfully");
        }
    });

    return CarModel;
};
