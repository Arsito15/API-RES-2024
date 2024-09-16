module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        Usuario_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre_Usuario: {
            type: Sequelize.STRING
        },
        Correo: {
            type: Sequelize.STRING
        },
        Contraseña: {
            type: Sequelize.STRING
        },
        Rol: {
            type: Sequelize.STRING
        },
        Telefono: {
            type: Sequelize.STRING
        },
        Fecha_Creacion: {
            type: Sequelize.DATE
        }
    });
    return Usuario;
};
