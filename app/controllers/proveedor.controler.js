const db = require('../config/db.config.js');
const Proveedor = db.Proveedor;

exports.create = (req, res) => {
    Proveedor.create(req.body).then(result => {
        res.status(200).json({ message: "Proveedor creado con éxito", proveedor: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear el proveedor", error: error.message });
    });
};

exports.retrieveAllProveedores = (req, res) => {
    Proveedor.findAll().then(proveedores => {
        res.status(200).json({ proveedores });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getProveedorById = (req, res) => {
    Proveedor.findByPk(req.params.id).then(proveedor => {
        res.status(200).json({ proveedor });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Proveedor.update(req.body, { where: { Proveedor_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Proveedor actualizado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Proveedor.destroy({ where: { Proveedor_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Proveedor eliminado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
