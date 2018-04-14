module.exports = (server) => {

    const User = server.models.User

    return (req, res, next) => {
        User.findById(req.params.id)
            .then(user => {
                if (user != null) {
                    next()
                } else {
                    const err = new Error();
                    err.code = 404
                    err.body = 'User with ID ' + req.params.id + ' does not exists'
                    throw err
                }
            })
            .catch(err => res.send(err.code, err.body))
    }
};