const db = require('../config/db.config.js');
const LogDisponibilidad = db.LogDisponibilidad;

exports.create = (req, res) => {
    LogDisponibilidad.create(req.body).then(result => {
        res.status(200).json({ message: "Log de disponibilidad creado con éxito", logDisponibilidad: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear el log de disponibilidad", error: error.message });
    });
};

exports.retrieveAllLogsDisponibilidad = (req, res) => {
    LogDisponibilidad.findAll().then(logsDisponibilidad => {
        res.status(200).json({ logsDisponibilidad });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getLogDisponibilidadById = (req, res) => {
    LogDisponibilidad.findByPk(req.params.id).then(logDisponibilidad => {
        res.status(200).json({ logDisponibilidad });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    LogDisponibilidad.update(req.body, { where: { Log_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Log de disponibilidad actualizado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    LogDisponibilidad.destroy({ where: { Log_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Log de disponibilidad eliminado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
