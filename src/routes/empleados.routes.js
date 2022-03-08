//  IMPORTACIONES
const express = require('express');
const empleadosControlador = require('../controllers/empleados.controller');

//RUTAS
const api = express.Router();

api.get('/empleados', empleadosControlador.ObtenerEmpleados);
api.post('/agregarEmpleados', empleadosControlador.AgregarEmpleados);
api.put('/editarEmpleados/:idEmpleado', empleadosControlador.EditarEmpleados);
api.delete('/eliminarEmpleados/:idEmpleado', empleadosControlador.EliminarEmpleados);

api.get('/buscarId/:idUsuario', empleadosControlador.BusquedaId);
api.get('/buscarNombre/:nombreUsuario', empleadosControlador.BusquedaNombre);
api.get('/buscarPuesto/:puestoUsuario', empleadosControlador.BusquedaPuesto);
api.get('/buscarDepartamento/:departamentoUsuario', empleadosControlador.BusquedaDepartamento);

//api.get('/buscarPorPuesto', controlEmpleado.buscarPorPuesto);
//api.get('/buscarPorDepartamento', controlEmpleado.buscarPorDepartameto)

module.exports = api;