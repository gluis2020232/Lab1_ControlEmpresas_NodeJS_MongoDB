const express = require('express');
const controladorUsuario = require('../controllers/usuario.controller');

// MIDDLEWARES
const md_autenticacion = require('../middlewares/autenticacion');
//const md_roles = require('../middlewares/roles');
//Para darle una funcionalidad al token siempre tenemos que tener el Middleware de autenticacion

const api = express.Router();

api.post('/registrar', controladorUsuario.Registrar);
api.post('/login', controladorUsuario.Login);


api.put('/editarUsuario/:idUsuario', /*[md_autenticacion.Auth, md_roles.verEmpresa],*/
                                     md_autenticacion.Auth, controladorUsuario.editarUsuario);


module.exports = api;