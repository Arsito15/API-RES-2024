const db = require('../config/db.config.js');
const Mascota = db.Mascota;

exports.create = (req, res) => {
    let mascota = {
        Propietario_ID: req.body.Propietario_ID,
        Nombre_Mascota: req.body.Nombre_Mascota,
        Tipo: req.body.Tipo,
        Raza: req.body.Raza,
        Peso: req.body.Peso,
        Fecha_Registro: req.body.Fecha_Registro,
        Edad: req.body.Edad,
        Sexo: req.body.Sexo
    };

    Mascota.create(mascota).then(result => {
        res.status(200).json({ message: "Mascota creada con éxito", mascota: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear la mascota", error: error.message });
    });
};

exports.retrieveAllMascotas = (req, res) => {
    Mascota.findAll().then(mascotas => {
        res.status(200).json({ mascotas });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getMascotaById = (req, res) => {
    Mascota.findByPk(req.params.id).then(mascota => {
        res.status(200).json({ mascota });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Mascota.update(req.body, { where: { Mascota_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Mascota actualizada" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Mascota.destroy({ where: { Mascota_ID: req.params.id } })
        .then(() => res.status(200).json({ message: "Mascota eliminada" }))
        .catch(error => res.status(500).json({ error: error.message }));
};
