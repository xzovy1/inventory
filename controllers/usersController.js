const db = require('../db/queries');

const links = [
    {href: '../homepage', text: 'Home'},
    {href: '../genres', text: 'Genres'},
    {href: '../books', text: 'Books'},
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