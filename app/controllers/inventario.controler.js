const db = require('../config/db.config.js');
const Inventario = db.Inventario;

exports.create = (req, res) => {
    Inventario.create(req.body).then(result => {
        res.status(200).json({ message: "Item de inventario creado con éxito", inventario: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear el item de inventario", error: error.message });
    });
};

exports.retrieveAllInventario = (req, res) => {
    Inventario.findAll().then(inventario => {
        res.status(200).json({ inventario });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getInventarioById = (req, res) => {
    Inventario.findByPk(req.params.id).then(inventario => {
        res.status(200).json({ inventario });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Inventario.update(req.body, { where: { Inventario_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Item de inventario actualizado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Inventario.destroy({ where: { Inventario_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Item de inventario eliminado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
