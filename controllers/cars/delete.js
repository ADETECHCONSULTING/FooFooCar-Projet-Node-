module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        Car.destroy({where: {idCar: req.params.id}})
            .then(car => res.send(car))
            .catch(error => res.send(error))
    }
};