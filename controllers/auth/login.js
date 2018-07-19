const jwt = require('jsonwebtoken');
const sha1 = require('sha1');
const uuid = require("uuid/v4");

module.exports = server => {
    const Token = server.models.Token;
    const User = server.models.User;

    return (req, res, next) => {
        var user;

        User.find({
            where: {
                username: req.body.username,
                password: sha1(req.body.password)
            }})
            .then(u => {
                if (u == null)
                    throw { code: 404, message: 'user not found' }
                user = u
            })
            .then(ensureLimitNotExceeded)
            .then(encrypt)
            .then(encryptedToken => res.send(encryptedToken))
            .catch(error => {
                console.log(error.toString())
                res.send(error.code || 500, error.message || error)
            });


        function ensureLimitNotExceeded() {
            if (user == null)
                return;
            return Token
                .findAll({where: {user_id: user.id}, order: [ [ 'createdAt' ] ]})
                .then(ensureCountNotExceeded)
                .then(create)
                .catch(e => {
                    console.log("ensureLimitNotExceeded " + e)
                });

            function ensureCountNotExceeded(tokens) {
                console.log("fzeuhcozjhce")
                if (!tokens || tokens.length < server.settings.simultaneousLoginLimit)
                    return true;

                return Token.destroy({where: {id: tokens[0].id}});
            }

            function create() {
                return Token.create({ user_id: user.id, id: uuid()})
            }
        }

        function encrypt(token) {

            return new Promise((resolve, reject) => {
                jwt.sign(token.id, server.settings.secret, (err, encryptedToken) => err ? reject(err) : resolve(encryptedToken))
            })
        }
    }
};