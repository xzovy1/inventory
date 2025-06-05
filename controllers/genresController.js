const db = require('../db/queries');

const links = [
    {href: '../homepage', text: 'Home'},
    {href: '../books', text: 'Books'},
    {href: '../users', text: 'Users'},
]

exports.genresGet = async (req, res) => {
    //show all genres
    const genres = await db.getAllGenres();
    res.render('genres', { genres: genres,});
}

exports.genresPost = async (req, res) => {
    //add new genre
    const {genre} = req.body;
    await db.addGenre(genre);
    res.redirect('/genres');
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