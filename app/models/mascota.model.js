module.exports = (sequelize, Sequelize) => {
    const Mascota = sequelize.define('mascota', {
        Mascota_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Propietario_ID: {
            type: Sequelize.INTEGER
        },
        Nombre_Mascota: {
            type: Sequelize.STRING
        },
        Tipo: {
            type: Sequelize.STRING
        },
        Raza: {
            type: Sequelize.STRING
        },
        Peso: {
            type: Sequelize.DECIMAL(5, 2)
        },
        Fecha_Registro: {
            type: Sequelize.DATE
        },
        Edad: {
            type: Sequelize.INTEGER
        },
        Sexo: {
            type: Sequelize.STRING
        }
    });
    return Mascota;
};
