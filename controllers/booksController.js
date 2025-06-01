const db = require('../db/queries');

const links = [
    {href: '../homepage', text: 'Home'},
    {href: '../genres', text: 'Genres'},
    {href: '../users', text: 'Users'},
]

exports.booksGet = (req, res) => {
    //show all books
    res.render('books', {links: links});
}

exports.booksPost = (req, res) => {
    //add new book
}

exports.bookGet = (req, res) => {
    //show book
}

exports.bookPost = (req, res) => {
    //update book
}

exports.bookDelete = (req, res) => {
    //delete book
}