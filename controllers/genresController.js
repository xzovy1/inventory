const db = require('../db/queries');

const links = [
    {href: '../homepage', text: 'Home'},
    {href: '../books', text: 'Books'},
    {href: '../users', text: 'Users'},
]

exports.genresGet = (req, res) => {
    //show all genres
    res.render('genres', {links: links});
}

exports.genresPost = (req, res) => {
    //add new genre
}

exports.genreGet = (req, res) => {
    //show genre
}

exports.genrePost = (req, res) => {
    //update genre
}

exports.genreDelete = (req, res) => {
    //delete genre
}