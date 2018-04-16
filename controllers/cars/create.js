module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        Car.create(req.body)
            .then(cars => res.send(cars))
            .catch(error => res.send(error))
    }
};