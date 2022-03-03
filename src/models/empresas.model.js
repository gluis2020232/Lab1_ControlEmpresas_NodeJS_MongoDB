const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Crear variable
const EmpresasSchema = Schema({
    nombre: String,
    direccion: String,
    proveedores: String,
    clientes: String
})

module.exports = mongoose.model('Empresas', EmpresasSchema);