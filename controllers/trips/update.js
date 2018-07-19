module.exports = server => {
    const Trip = server.models.Trip;

    return (req, res, next) => {
        Trip.update(req.body, {where: {id: req.params.id}})
            .then(trip => {
                Trip.findById(req.params.id)
                    .then(trip => res.send(trip.dataValues))
            })
            .catch(err => res.send(err));
    }
};