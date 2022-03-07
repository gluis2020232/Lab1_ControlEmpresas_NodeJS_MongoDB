const { model } = require("mongoose");
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');

//Registrar
function Registrar(req, res) {
    var parametros = req.body;//Variable para obtener los datos des cuerpo
    var modeloUsuario = new Usuario();

    //Verificar si un correo ya existe      
    Usuario.find({ email : parametros.email }, (err, usuarioEncontrado) => { 
        if ( usuarioEncontrado.length > 0 ) {  //Si el array tiene algo no lo dejo agregar
            return res.status(500)
                .send({ mensaje: "Este correo ya se encuentra utilizado" });

        } else { //Y si el valor no es mayor a cero
            if(parametros.nombre && parametros.apellido && parametros.email
                && parametros.password) { //Parametros obligatorios
                modeloUsuario.nombre = parametros.nombre; //Si se cumple el if me agrega los dts
                modeloUsuario.apellido = parametros.apellido;
                modeloUsuario.email = parametros.email;
                modeloUsuario.rol = 'Admin';
                modeloUsuario.imagen = null;
                //Encriptar password
                bcrypt.hash(parametros.password, null, null, (err, passwordEncriptada) => {
                    modeloUsuario.password = passwordEncriptada;
                //Guardarlo
                modeloUsuario.save((err, usuarioGuardado) => {
                    if(err) return res.status(500).send({ mensaje : 'Error en la peticion' })
                    if(!usuarioGuardado) return res.status(500)
                        .send({ mensaje: 'Error al registrar Usuario' });
    
                        return res.status(200).send({ usuario: usuarioGuardado });
                    });
                })

            } else {
                 return res.status(500)
                   .send({ mensaje : 'Debe ingresar los parametros obligatorios'});                   }             
           }   

        });    
    }


    //Login
    function Login(req, res) {
        var parametros = req.body;
    
        // Buscamos el usuario por email
        Usuario.findOne({ email : parametros.email }, (err, usuarioEncontrado) => {
            if(err) return res.status(500).send({ mensaje: 'Error en la peticion'});
            if (usuarioEncontrado){
    
                // Comparamos contraseña si encriptar con la encriptada
                bcrypt.compare(parametros.password, usuarioEncontrado.password, 
                    (err, passwordCorrecta) => {//Retorna un boleano true, false
                        if (passwordCorrecta) {

                    //        return res.status(200).send({ mensaje: 'Usuario logeado con exito'})
                            return res.status(200).send({ token: jwt.crearToken(usuarioEncontrado) })

                        } else {
                            return res.status(500)
                                .send({ mensaje: 'La contrasena no coincide.'})
                        }
                     })
            } else {
                return res.status(500)
                    .send({ mensaje: 'El usuario, no se ha podido identificar'})
            }
        })  
    }
    
    //Exportaciones
    module.exports = {
        Registrar,
        Login
    }   