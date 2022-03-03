const Empresas = require('../models/empresas.model');

//AGREGAR EMPRESAS
function AgregarEmpresas (req, res) {
    var parametros = req.body; //Obtener todos lo parametros de postman body
    var modeloEmpresas = new Empresas();

    //Siempre que vaya agregar una empresa, obligatoriamente tiene que traer el nombre y la dirección
    if( parametros.nombre && parametros.direccion ) {
        modeloEmpresas.nombre = parametros.nombre;
        modeloEmpresas.direccion = parametros.direccion;
        modeloEmpresas.proveedores = parametros.proveedores;
        modeloEmpresas.clientes = parametros.clientes;

        //Agregar y almacenar este
        modeloEmpresas.save((err, empresaGuardado) => {

            //Verificaciones
            if (err) return res.status(500).send({ mensaje: 'Error en la peticion '});
            if(!empresaGuardado) return res.status(500).send({ mensaje: 'Error al agregar la empresa'});
            //Verificaciones

            return res.status(200).send({ empresas: empresaGuardado});
        });
    } else {
        return res.status(500).send({ mensaje: "Debe enviar los parámetros obligatorios."})
    }
    
}


// EDITAR EMPRESAS
function EditarEmpresas(req, res) {
    var idEmpl = req.params.idEmpresa; //Obtener el valor de la variable en ruta
    var parametros = req.body; //Obtener los los parámetros en el body

    Empresas.findByIdAndUpdate(idEmpl, parametros, { new:true } ,(err, empresaEditado)=>{
      
        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if(!empresaEditado) return res.status(404)
            .send({ mensaje: 'Error al Editar la empresa' });
        //Verificaciones

        return res.status(200).send({ empresas: empresaEditado});
    })
}

module.exports = {
    AgregarEmpresas,
    EditarEmpresas
}