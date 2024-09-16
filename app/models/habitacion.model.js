module.exports = (sequelize, Sequelize) => {
    const Habitacion = sequelize.define('habitacion', {
        Habitacion_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre_Habitacion: {
            type: Sequelize.STRING
        },
        Estado: {
            type: Sequelize.STRING
        },
        Capacidad_Maxima: {
            type: Sequelize.INTEGER
        },
        Tipo_Habitacion: {
            type: Sequelize.STRING
        },
        Ubicacion: {
            type: Sequelize.STRING
        },
        Descripcion: {
            type: Sequelize.TEXT
        },
        Precio_Base: {
            type: Sequelize.DECIMAL(10, 2)
        }
    });
    return Habitacion;
};
