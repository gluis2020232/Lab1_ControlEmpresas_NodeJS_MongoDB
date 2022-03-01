const Empleados = require('../models/empleados.model');

//OBTENER EMPLEADOS
function ObtenerEmpleados (req, res)  {
    Empleados.find({}, (err, empleadosEncontrados) => {
        
        return res.send({ empleados: empleadosEncontrados })
    })
}

module.exports = {
    ObtenerEmpleados
}