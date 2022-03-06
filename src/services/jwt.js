const jwt_simple = require('jwt-simple');
const moment = require('moment');
const claveSecreta = ('clave_secreta_IN6BV');

//Creamos un token que va esperar un usuario
/* Suponemos que cuando utilicen esta varibale usuario, yo espero
 enviarle o recibir en el usario.model los datos del usuario.*/
//Almacenamos en el payload los datos del usuario que yo quiero que se almacenen dentro mi token
exports.crearToken = function (usuario) {
    let payload = {
        sub: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
        iat: moment().unix(),
        exp: moment().day(7, 'days').unix()
    }
    //Codificar 
    return jwt_simple.encode(payload, claveSecreta);
}