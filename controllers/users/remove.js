module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        User.destroy({
            where: {
                idUser: req.params.idUser
            }
        })
            .then(() => res.send().status(200))
            .catch(error => res.send(500, error))
    }
};