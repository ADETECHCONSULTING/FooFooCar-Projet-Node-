module.exports = server => {
    return (req, res, next) => {
        const encryptedToken = req.header('Authorization');
        server.controllers.auth
            .decryptToken(encryptedToken)
            .then(user => req.user = user)
            .then(() => next())
            .catch(() => res.send(401, 'unauthorized'))
    }
};