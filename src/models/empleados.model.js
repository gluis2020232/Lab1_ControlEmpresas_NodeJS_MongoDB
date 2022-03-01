const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Crear variable
const EmpleadosSchema = Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    puesto: String,
    departamento: String,
})

module.exports = mongoose.model('Empleados', EmpleadosSchema);