const db = require('../config/db.config.js');
const Reservacion = db.Reservacion;

exports.create = (req, res) => {
    Reservacion.create(req.body).then(result => {
        res.status(200).json({ message: "Reservación creada con éxito", reservacion: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear la reservación", error: error.message });
    });
};

exports.retrieveAllReservaciones = (req, res) => {
    Reservacion.findAll().then(reservaciones => {
        res.status(200).json({ reservaciones });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getReservacionById = (req, res) => {
    Reservacion.findByPk(req.params.id).then(reservacion => {
        res.status(200).json({ reservacion });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Reservacion.update(req.body, { where: { Reservacion_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Reservación actualizada" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Reservacion.destroy({ where: { Reservacion_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Reservación eliminada" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
    