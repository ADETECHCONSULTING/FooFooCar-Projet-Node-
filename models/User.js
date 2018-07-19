const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    //const Car = server.models.Car;

    let UserModel = sequelize.define("user", {
        id:{
          primaryKey: true,
          type: Sequelize.STRING(50)
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });


    UserModel.associate = (models) => {
        models.User.hasMany(models.Car, {as: 'cars', foreignKey: 'idCar'});
    };

    return UserModel;
};

