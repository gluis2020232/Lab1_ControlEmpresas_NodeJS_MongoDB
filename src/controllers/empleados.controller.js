const Empleados = require('../models/empleados.model');

//OBTENER EMPLEADOS
function ObtenerEmpleados (req, res)  {
    Empleados.find({}, (err, empleadosEncontrados) => {
        
        return res.send({ empleados: empleadosEncontrados })
    })
}


//AGREGAR EMPLEADOS
function AgregarEmpleados (req, res) {
    var parametros = req.body; //Obtener todos lo parametros de postman body
    var modeloEmpleados = new Empleados();

    //Siempre que vaya agregar un empleado, obligatoriamente tiene que traer el nombre y el apellido
    if( parametros.nombre && parametros.apellido ) {
        modeloEmpleados.nombre = parametros.nombre;
        modeloEmpleados.apellido = parametros.apellido;
        modeloEmpleados.email = parametros.email;
        modeloEmpleados.password = parametros.password;
        modeloEmpleados.puesto = parametros.puesto;
        modeloEmpleados.departamento = parametros.departamento;

  //      modeloEmpleados.sabores = [];

        //Agregar y almacenar este
        modeloEmpleados.save((err, empleadoGuardado) => {

            //Verificaciones
            if (err) return res.status(500).send({ mensaje: 'Error en la peticion '});
            if(!empleadoGuardado) return res.status(500).send({ mensaje: 'Error al agregar el empleado'});
            //Verificaciones

            return res.status(200).send({ empleado: empleadoGuardado});
        });
    } else {
        return res.status(500).send({ mensaje: "Debe enviar los parámetros obligatorios."})
    }
    
}


module.exports = {
    ObtenerEmpleados,
    AgregarEmpleados
}