// Autenticar ese token
const jwt_simple = require('jwt-simple');
const moment = require('moment');
const claveSecreta = ('clave_secreta_IN6BV');


exports.Auth = function(req, res, next) {
    if (! req.headers.authorization ) {
        return res.status(500).send({message: 'La peticion no tiene la cabecera de Authorization'});
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        var payload = jwt_simple.decode(token, claveSecreta);
        // EXP = variable que contiene el tiempo de expiracion del token
        if (payload.exp <= moment().unix()) {
            return res.status(200).send({message: "El token a expirado."});
        }
    } catch (err) {
        return res.status(200).send({message: "El token nos es valido."});
    }

    req.user = payload;
    next();
}