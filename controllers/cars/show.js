module.exports = server => {
    const Car = server.models.Car;

    return (req, res, next) => {
        Car.find({
            where:{
                idCar: req.params.id
            }
        })
            .then(car => res.send(car))
            .catch(error => res.send(error))
    }
};