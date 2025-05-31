const db = require('../db/queries');

const links = [
    {href: '../homepage', text: 'Home'},
    {href: '../orders', text: 'Orders'},
    {href: '../products', text: 'Products'},
    {href: '../users', text: 'Users'},
]

exports.categoriesGet = (req, res) => {
    //show all categories
    res.render('categories', {links: links});
}

exports.categoriesPost = (req, res) => {
    //add new category
}

exports.categoryGet = (req, res) => {
    //show category
}

exports.categoryPost = (req, res) => {
    //update category
}

exports.categoryDelete = (req, res) => {
    //delete category
}