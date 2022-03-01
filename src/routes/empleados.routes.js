//  IMPORTACIONES
const express = require('express');
const empleadosControlador = require('../controllers/empleados.controller');

//RUTAS
const api = express.Router();

api.get('/empleados', empleadosControlador.ObtenerEmpleados);
api.post('/agregarEmpleados', empleadosControlador.AgregarEmpleados);

module.exports = api;