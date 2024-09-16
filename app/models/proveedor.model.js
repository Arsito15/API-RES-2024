module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define('proveedor', {
        Proveedor_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre: {
            type: Sequelize.STRING
        },
        Contacto: {
            type: Sequelize.STRING
        },
        Direccion: {
            type: Sequelize.TEXT
        }
    });
    return Proveedor;
};
