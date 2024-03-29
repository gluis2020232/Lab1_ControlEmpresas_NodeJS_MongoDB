const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    nombre: String,
    apellido: String,
    puesto: String,
    departamento: String,
    email: String,
    password: String,
    rol: String,
    imagen: String
})

module.exports = mongoose.model('Usuarios', UsuarioSchema);