//  IMPORTACIONES
const express = require('express');
const empleadosControlador = require('../controllers/empleados.controller');

//RUTAS
const api = express.Router();

api.get('/empleados', empleadosControlador.ObtenerEmpleados);
api.post('/agregarEmpleados', empleadosControlador.AgregarEmpleados);
api.put('/editarEmpleados/:idEmpleado', empleadosControlador.EditarEmpleados);
api.delete('/eliminarEmpleados/:idEmpleado', empleadosControlador.EliminarEmpleados);

module.exports = api;