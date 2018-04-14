module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        Car.update(req.body, {where: {id: req.params.id}})
            .then(car => {
                Car.findById(req.params.id)
                    .then(car => res.send(car.dataValues))
            })
            .catch(err => res.send(err));
    }
};