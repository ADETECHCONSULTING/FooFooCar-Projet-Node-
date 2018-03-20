const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    //const Car = server.models.Car;

    const UserModel = sequelize.define("user", {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "White"
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });

/*
    associate = (models) => {
        models.User.hasMany(models.Car);
    };
*/

    sequelize.sync({force: true}).then( (err) => {
        if(err){
            console.log("An error occurred while creating the table");
        }else{
            console.log("Table created successfully");
        }
    });

    return UserModel;
};

