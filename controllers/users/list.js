module.exports = server => {
    const User = server.models.User;
    const Car = server.models.Car;

    return (req, res, next) => {

        User.findAll()
            .then(users => res.send(users))
            .catch(error => res.send(error))
    }
};