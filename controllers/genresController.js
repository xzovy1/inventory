const db = require('../db/queries');

const links = [
    {href: '../homepage', text: 'Home'},
    {href: '../books', text: 'Books'},
    {href: '../users', text: 'Users'},
]

exports.genresGet = async (req, res) => {
    //show all genres
    const genres = await db.getAllGenres();
    res.render('genres', { genres: genres});
}

exports.genresPost = async (req, res) => {
    //add new genre
    const {genre} = req.body;
    await db.addGenre(genre);
    res.redirect('/genres');
}

exports.genreGet = async (req, res) => {
    //show genre
    const {id} = req.params;
    const data = await db.getBooksInGenre(id);
    const genre = data[0].genre;
    res.render("filteredGenres", {data: data, genre: genre});
}

exports.genrePost = (req, res) => {
    //update genre
}

exports.genreDelete = (req, res) => {
    //delete genre
}