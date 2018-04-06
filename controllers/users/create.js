module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        User.create(req.body)
            .then(users => res.send(users))
            .catch(error => res.send(error))
    }
};