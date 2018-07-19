const uuid = require("uuid/v4");

module.exports = server => {
    const Trip = server.models.Trip;

    return (req, res, next) => {
        req.body.id = uuid();
        req.body.status = Trip.statuses.NotStarted;
        Trip.create(req.body)
            .then(trips => res.send(trips))
            .catch(error => res.send(error))
    }
};