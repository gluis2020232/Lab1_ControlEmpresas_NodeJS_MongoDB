

exports.verAdmin = function(req, res, next) {
    if(req.user.rol !== "USUARIO") return res.status(403).send({mensaje: "Solo puede acceder el Admin"})
    
    next();
}

exports.verEmpresa = function(req, res, next) {
    if(req.user.rol !== "Empresa") return res.status(403).send({mensaje: "Solo puede acceder la empres"})
    
    next();
}