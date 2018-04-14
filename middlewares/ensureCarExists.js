module.exports = (server) => {

    const Car = server.models.Car

    return (req, res, next) => {
        Car.findById(req.params.id)
            .then(car => {
                if (car != null) {
                    next()
                } else {
                    const err = new Error();
                    err.code = 404
                    err.body = 'Car with ID ' + req.params.id + ' does not exists'
                    throw err
                }
            })
            .catch(err => res.send(err.code, err.body))
    }
};