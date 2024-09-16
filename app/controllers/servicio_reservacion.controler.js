const db = require('../config/db.config.js');
const ServicioReservacion = db.ServicioReservacion;

exports.create = (req, res) => {
    ServicioReservacion.create(req.body).then(result => {
        res.status(200).json({ message: "Servicio reservado con éxito", servicioReservacion: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al reservar el servicio", error: error.message });
    });
};

exports.retrieveAllServiciosReservacion = (req, res) => {
    ServicioReservacion.findAll().then(serviciosReservacion => {
        res.status(200).json({ serviciosReservacion });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getServicioReservacionById = (req, res) => {
    ServicioReservacion.findByPk(req.params.id).then(servicioReservacion => {
        res.status(200).json({ servicioReservacion });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    ServicioReservacion.update(req.body, { where: { Servicio_Reservacion_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Servicio de reservación actualizado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    ServicioReservacion.destroy({ where: { Servicio_Reservacion_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Servicio de reservación eliminado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
