const sha1 = require("sha1");

module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        const data = req.body;
        data.password = sha1(req.body.password);

        User.create(data)
            .then(users => res.send(users))
            .catch(error => res.send(error))
    }
};