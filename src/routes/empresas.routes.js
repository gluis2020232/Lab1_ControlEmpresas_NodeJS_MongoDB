//  IMPORTACIONES
const express = require('express');
const empresaControlador = require('../controllers/empresas.controller');

//RUTAS
const api = express.Router();

//api.get('/productos', empresaControlador.ObtenerProductos);
api.post('/agregarEmpresas', empresaControlador.AgregarEmpresas);
//api.put('/editarProducto/:idProducto', empresaControlador.EditarProductos);//Obtener una variable por medio de ruta
//api.delete('/eliminarProducto/:idProducto', empresaControlador.EliminarProductos);//Obtener una variable por medio de ruta

module.exports = api;