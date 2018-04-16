module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        User.destroy({
            where: {
                idUser: req.params.id
            }
        })
            .then(() => res.send().status(200))
            .catch(error => res.status(500).send(error))
    }
};