module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        User.findAll()
            .then(users => res.send(users))
            .catch(error => res.send(error))
    }
};