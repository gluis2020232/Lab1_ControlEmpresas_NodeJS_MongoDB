//  IMPORTACIONES
const express = require('express');
const empleadosControlador = require('../controllers/empleados.controller');

//RUTAS
const api = express.Router();

api.get('/empleados', empleadosControlador.ObtenerEmpleados);

module.exports = api;