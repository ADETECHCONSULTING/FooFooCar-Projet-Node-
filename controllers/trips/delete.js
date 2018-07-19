module.exports = server => {
    const Trip = server.models.Trip;

    return (req, res, next) => {
        Trip.destroy({where: {id: req.params.id}})
            .then(trip => res.send(trip))
            .catch(error => res.send(error))
    }
};