const db = require('../config/db.config.js');
const Order = db.Order;

exports.create = (req, res) => {
    let order = {};

    try {
        order.date = req.body.date;
        order.customerId = req.body.customerId;
        order.totalAmount = req.body.totalAmount;

        Order.create(order).then(result => {
            res.status(200).json({
                message: "Upload Successfully an Order with id = " + result.id,
                order: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllOrders = (req, res) => {
    Order.findAll()
        .then(orderInfos => {
            res.status(200).json({
                message: "Get all Orders' Infos Successfully!",
                orders: orderInfos
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.getOrderById = (req, res) => {
    let orderId = req.params.id;
    Order.findByPk(orderId)
        .then(order => {
            res.status(200).json({
                message: "Successfully Get an Order with id = " + orderId,
                order: order
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.updateById = async (req, res) => {
    try {
        let orderId = req.params.id;
        let order = await Order.findByPk(orderId);

        if (!order) {
            res.status(404).json({
                message: "Not Found for updating an order with id = " + orderId,
                order: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                date: req.body.date,
                customerId: req.body.customerId,
                totalAmount: req.body.totalAmount
            }
            let result = await Order.update(updatedObject, { returning: true, where: { id: orderId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> Can not update an order with id = " + req.params.id,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json({
                message: "Update successfully an Order with id = " + orderId,
                order: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Can not update an order with id = " + req.params.id,
            error: error.message
        });
    }
}

exports.deleteById = async (req, res) => {
    try {
        let orderId = req.params.id;
        let order = await Order.findByPk(orderId);

        if (!order) {
            res.status(404).json({
                message: "Does Not exist an Order with id = " + orderId,
                error: "404",
            });
        } else {
            await order.destroy();
            res.status(200).json({
                message: "Delete Successfully an Order with id = " + orderId,
                order: order,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Can NOT delete an order with id = " + req.params.id,
            error: error.message,
        });
    }
}
