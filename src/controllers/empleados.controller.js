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


// EDITAR EMPLEADOS
function EditarEmpleados(req, res) {
    var idEmpl = req.params.idEmpleado; //Obtener el valor de la variable en ruta
    var parametros = req.body; //Obtener los los parámetros en el body

    Empleados.findByIdAndUpdate(idEmpl, parametros, { new:true } ,(err, empleadoEditado)=>{
      
        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if(!empleadoEditado) return res.status(404)
            .send({ mensaje: 'Error al Editar el empleado' });
        //Verificaciones

        return res.status(200).send({ empleados: empleadoEditado});
    })
}


//ELIMINAR EMPLEADOS
function EliminarEmpleados(req, res) {
    var idEmpl = req.params.idEmpleado; //Obtener el valor de la variable en ruta

    Empleados.findByIdAndDelete(idEmpl, (err, empleadoEliminado)=>{

        //Verificaciones
        if(err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if(!empleadoEliminado) return res.status(500)
            .send({ mensaje: 'Error al eliminar el empleado' })
        //Verificaciones

        return res.status(200).send({ empleados: empleadoEliminado });
    })
}



// BUSQUEDAS
function BusquedaId(req, res) {
    var nomUser = req.params.idUsuario;

    Empleados.find({ _id: nomUser }, (err, usuariosEncontrados) => {
        if(err) return res.status(500).send({ mensaje: 'Error en  la peticion'});
        if(!usuariosEncontrados) return res.status(500)
            .send({ mensaje: 'Error al obtener los usuarios'})

        return res.status(200).send({ usuarios: usuariosEncontrados })
    })
}


function BusquedaNombre(req, res) {
    var nomUser = req.params.nombreUsuario;

    Empleados.find({ nombre: nomUser }, (err, usuariosEncontrados) => {
        if(err) return res.status(500).send({ mensaje: 'Error en  la peticion'});
        if(!usuariosEncontrados) return res.status(500)
            .send({ mensaje: 'Error al obtener los usuarios'})

        return res.status(200).send({ usuarios: usuariosEncontrados })
    })
}


function BusquedaPuesto(req, res) {
    var nomUser = req.params.puestoUsuario;

    Empleados.find({ puesto: nomUser }, (err, usuariosEncontrados) => {
        if(err) return res.status(500).send({ mensaje: 'Error en  la peticion'});
        if(!usuariosEncontrados) return res.status(500)
            .send({ mensaje: 'Error al obtener los usuarios'})

        return res.status(200).send({ usuarios: usuariosEncontrados })
    })
}


function BusquedaDepartamento(req, res) {
    var nomUser = req.params.departamentoUsuario;

    Empleados.find({ departamento: nomUser }, (err, usuariosEncontrados) => {
        if(err) return res.status(500).send({ mensaje: 'Error en  la peticion'});
        if(!usuariosEncontrados) return res.status(500)
            .send({ mensaje: 'Error al obtener los usuarios'})

        return res.status(200).send({ usuarios: usuariosEncontrados })
    })
}






module.exports = {
    ObtenerEmpleados,
    AgregarEmpleados,
    EditarEmpleados,
    EliminarEmpleados,
    BusquedaNombre,
    BusquedaId,
    BusquedaPuesto,
    BusquedaDepartamento
}