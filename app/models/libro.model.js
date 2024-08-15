module.exports = (sequelize, Sequelize) => {
    const Libro = sequelize.define('libro', {
        codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING(60)
        },
        editorial: {
            type: Sequelize.STRING(25)
        },
        autor: {
            type: Sequelize.STRING(25)
        },
        genero: {
            type: Sequelize.STRING(20)
        },
        pais_autor: {
            type: Sequelize.STRING(20)
        },
        paginas: {
            type: Sequelize.INTEGER
        },
        anio_edicion: {
            type: Sequelize.DATE
        },
        precio: {
            type: Sequelize.FLOAT
        }
    });
    return Libro;
}
