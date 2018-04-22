module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        delete req.body.username;
        User.update(req.body, {where: {idUser: req.params.id}})
            .then(() => {
                User.find({where: {idUser: req.params.id}})
                    .then(user => res.send(user.dataValues))
            })
            .catch(err => res.send(err));
    }
};