const db = require('../db/queries');

const links = [
    {href: '../homepage', text: 'Home'},
    {href: '../categories', text: 'Categories'},
    {href: '../orders', text: 'Orders'},
    {href: '../users', text: 'Users'},
]

exports.productsGet = (req, res) => {
    //show all products
    res.render('products', {links: links});
}

exports.productsPost = (req, res) => {
    //add new product
}

exports.productGet = (req, res) => {
    //show product
}

exports.productPost = (req, res) => {
    //update product
}

exports.productDelete = (req, res) => {
    //delete product
}