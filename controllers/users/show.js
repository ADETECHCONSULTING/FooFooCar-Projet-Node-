module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        User.find({where:{
            idUser: req.params.id
            }})
            .then(user => res.send(user))
            .catch(error => res.send(error))
    }
};