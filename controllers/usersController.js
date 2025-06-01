const db = require('../db/queries');

const links = [
    {href: '../homepage', text: 'Home'},
    {href: '../categories', text: 'Categories'},
    {href: '../products', text: 'Products'},
]

exports.usersGet = (req, res) => {
    //show all users
    res.render('users', {links: links});
}

exports.usersPost = (req, res) => {
    //add new users
}

exports.userGet = (req, res) => {
    //show user
}

exports.userPost = (req, res) => {
    //update user
}

exports.userDelete = (req, res) => {
    //delete user
}