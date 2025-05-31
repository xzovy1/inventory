const db = require('../db/queries');
const links = [
    {href: '../homepage', text: 'Home'},
    {href: '../categories', text: 'Categories'},
    {href: '../products', text: 'Products'},
    {href: '../users', text: 'Users'},
]

exports.ordersGet = (req, res) => {
    //show all orders
    res.render('orders', {links: links});
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