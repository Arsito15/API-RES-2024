const db = require('../config/db.config.js');
const Precio = db.Precio;

exports.create = (req, res) => {
    Precio.create(req.body).then(result => {
        res.status(200).json({ message: "Precio creado con éxito", precio: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear el precio", error: error.message });
    });
};

exports.retrieveAllPrecios = (req, res) => {
    Precio.findAll().then(precios => {
        res.status(200).json({ precios });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getPrecioById = (req, res) => {
    Precio.findByPk(req.params.id).then(precio => {
        res.status(200).json({ precio });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Precio.update(req.body, { where: { Precio_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Precio actualizado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Precio.destroy({ where: { Precio_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Precio eliminado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
