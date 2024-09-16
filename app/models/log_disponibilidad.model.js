module.exports = (sequelize, Sequelize) => {
    const LogDisponibilidad = sequelize.define('log_disponibilidad', {
        Log_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Habitacion_ID: {
            type: Sequelize.INTEGER
        },
        Estado: {
            type: Sequelize.STRING
        },
        Fecha_Cambio: {
            type: Sequelize.DATE
        },
        Comentarios: {
            type: Sequelize.TEXT
        }
    });
    return LogDisponibilidad;
};
