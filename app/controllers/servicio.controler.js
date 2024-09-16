const db = require('../config/db.config.js');
const Servicio = db.Servicio;

exports.create = (req, res) => {
    Servicio.create(req.body).then(result => {
        res.status(200).json({ message: "Servicio creado con éxito", servicio: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear el servicio", error: error.message });
    });
};

exports.retrieveAllServicios = (req, res) => {
    Servicio.findAll().then(servicios => {
        res.status(200).json({ servicios });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getServicioById = (req, res) => {
    Servicio.findByPk(req.params.id).then(servicio => {
        res.status(200).json({ servicio });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Servicio.update(req.body, { where: { Servicio_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Servicio actualizado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Servicio.destroy({ where: { Servicio_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Servicio eliminado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
