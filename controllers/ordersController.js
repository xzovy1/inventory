const db = require('../db/queries');

exports.ordersGet = (req, res) => {
    //show all orders
    res.render('orders');
}

exports.ordersPost = (req, res) => {
    //add new order
}

exports.orderGet = (req, res) => {
    //show order
}

exports.orderPost = (req, res) => {
    //update order
}

exports.orderDelete = (req, res) => {
    //delete order
}