const express = require('express');
const cors = require('cors'); //Cabecera
const app = express();

//IMPORTACION RUTAS
const empleadosRoutes = require('./src/routes/empleados.routes');


//MIDDLEWARE : Un middleware es un intermedio y un verificador de etc
app.use(express.urlencoded({ extended: false}));
app.use(express.json()); //Convertir a json todo

//CABECERAS
app.use(cors()); //Cargo la cabecera


// CARGA DE RUTAS localhost:3000
app.use('/api', empleadosRoutes);

module.exports = app;