module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('order', {	
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE
        },
        customerId: {
            type: Sequelize.INTEGER
        },
        totalAmount: {
            type: Sequelize.FLOAT
        }
    });
    return Order;
}
