const db = require('../config/db.config.js');
const Pago = db.Pago;

exports.create = (req, res) => {
    Pago.create(req.body).then(result => {
        res.status(200).json({ message: "Pago registrado con éxito", pago: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al registrar el pago", error: error.message });
    });
};

exports.retrieveAllPagos = (req, res) => {
    Pago.findAll().then(pagos => {
        res.status(200).json({ pagos });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getPagoById = (req, res) => {
    Pago.findByPk(req.params.id).then(pago => {
        res.status(200).json({ pago });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Pago.update(req.body, { where: { Pago_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Pago actualizado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Pago.destroy({ where: { Pago_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Pago eliminado" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
