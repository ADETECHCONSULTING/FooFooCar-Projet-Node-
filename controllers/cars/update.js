module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        Car.update(req.body, {where: {idCar: req.params.id}})
            .then(car => {
                Car.find({where: {
                    idCar: req.params.id
                    }})
                    .then(car => res.send(car.dataValues))
            })
            .catch(err => res.send(err));
    }
};