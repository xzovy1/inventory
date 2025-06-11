const db = require('../db/queries');

exports.genresGet = async (req, res) => {
    //show all genres
    const genres = await db.getAllGenres();
    res.render('templatePage', { genres: genres, title: "Genres", form: "genres"});
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
    res.render("filtered", {data: data, genre: genre, title: genre});
}

exports.genrePost = (req, res) => {
    //update genre
    console.log(req.params)
}

exports.genreDelete = (req, res) => {
    //delete genre
}