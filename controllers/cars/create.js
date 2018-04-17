module.exports = server => {
    const Car = server.models.Car;
    const uuid = require("uuid/v4");

    return (req, res, next) => {
        const data = req.body;
        data.idCar = uuid();
        Car.create(data)
            .then(car => res.send(car))
            .catch(error => res.send(error))
    }
};