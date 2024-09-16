module.exports = (sequelize, Sequelize) => {
    const Precio = sequelize.define('precio', {
        Precio_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Tipo_Mascota: {
            type: Sequelize.STRING
        },
        Tipo_Habitacion: {
            type: Sequelize.STRING
        },
        Precio_Diario: {
            type: Sequelize.DECIMAL(10, 2)
        }
    });
    return Precio;
};
