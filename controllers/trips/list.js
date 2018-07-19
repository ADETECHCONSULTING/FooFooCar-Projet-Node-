module.exports = server => {
    const Trip = server.models.Trip;

    return (req, res, next) => {
        Trip.findAll()
            .then(trips => res.send(trips))
            .catch(error => res.send(error))
    }
};