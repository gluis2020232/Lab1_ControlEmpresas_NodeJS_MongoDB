//  IMPORTACIONES
const express = require('express');
const empresaControlador = require('../controllers/empresas.controller');

//RUTAS
const api = express.Router();

api.get('/empresas', empresaControlador.ObtenerEmpresas);
api.post('/agregarEmpresas', empresaControlador.AgregarEmpresas);
api.put('/editarEmpresa/:idEmpresa', empresaControlador.EditarEmpresas);//Obtener una variable por medio de ruta
api.delete('/eliminarEmpresa/:idEmpresa', empresaControlador.EliminarEmpresas);//Obtener una variable por medio de ruta

module.exports = api;