const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ControlEmpresas', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Se ha conectado correctamente a la base de datos.');

    app.listen(4000, function (){
        console.log("Servidor de Express corriendo correctamente en el puerto 4000");
    });

}).catch(error => console.log(error));

module.exports = app;