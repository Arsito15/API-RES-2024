const db = require('../config/db.config.js');
const Promocion = db.Promocion;

exports.create = (req, res) => {
    Promocion.create(req.body).then(result => {
        res.status(200).json({ message: "Promoción creada con éxito", promocion: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear la promoción", error: error.message });
    });
};

exports.retrieveAllPromociones = (req, res) => {
    Promocion.findAll().then(promociones => {
        res.status(200).json({ promociones });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getPromocionById = (req, res) => {
    Promocion.findByPk(req.params.id).then(promocion => {
        res.status(200).json({ promocion });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Promocion.update(req.body, { where: { Promocion_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Promoción actualizada" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Promocion.destroy({ where: { Promocion_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Promoción eliminada" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
