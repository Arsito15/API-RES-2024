const db = require('../config/db.config.js');
const Usuario = db.Usuario;

exports.create = (req, res) => {
    let usuario = {
        Nombre_Usuario: req.body.Nombre_Usuario,
        Correo: req.body.Correo,
        Contraseña: req.body.Contraseña,
        Rol: req.body.Rol,
        Telefono: req.body.Telefono,
        Fecha_Creacion: req.body.Fecha_Creacion
    };

    Usuario.create(usuario).then(result => {
        res.status(200).json({ message: "Usuario creado con éxito", usuario: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear usuario", error: error.message });
    });
};

exports.retrieveAllUsuarios = (req, res) => {
    Usuario.findAll().then(usuarios => {
        res.status(200).json({ usuarios });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getUsuarioById = (req, res) => {
    Usuario.findByPk(req.params.id).then(usuario => {
        res.status(200).json({ usuario });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Usuario.update(req.body, { where: { Usuario_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Usuario actualizado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Usuario.destroy({ where: { Usuario_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Usuario eliminado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
