const db = require('../config/db.config.js');
const Habitacion = db.Habitacion;

exports.create = (req, res) => {
    Habitacion.create(req.body).then(result => {
        res.status(200).json({ message: "Habitación creada con éxito", habitacion: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear la habitación", error: error.message });
    });
};

exports.retrieveAllHabitaciones = (req, res) => {
    Habitacion.findAll().then(habitaciones => {
        res.status(200).json({ habitaciones });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getHabitacionById = (req, res) => {
    Habitacion.findByPk(req.params.id).then(habitacion => {
        res.status(200).json({ habitacion });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Habitacion.update(req.body, { where: { Habitacion_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Habitación actualizada" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Habitacion.destroy({ where: { Habitacion_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Habitación eliminada" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
