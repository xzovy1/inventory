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

exports.genreUpdateGet = async (req, res) => {
    const {id} = req.params;
    const [data] = await db.getGenre(id);
    const {genre} = data;
    res.render("genresForm", {title: 'Update Genre', action: `/genres/${id}`, genre: genre})
}


exports.genrePost = async (req, res) => {
    //update genre
    const {id} = req.params;
    await db.updateGenre(id, genre);
    res.redirect('/genres')
}

exports.genreDelete = async (req, res) => {
    //delete genre
    const {id} = req.params;
    await db.deleteGenre(id);
    res.redirect('/genres')
}