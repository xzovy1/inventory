const db = require('../db/queries');
const { body, validationResult} = require('express-validator');

const validateGenre = [
    body('genre').trim().isAlpha().withMessage("Must only contain letters ")
        .isLength({min:1, max: 20}).withMessage(`Must be between 1 and 20 characters.`) 
]

exports.genresGet = async (req, res) => {
    //show all genres
    const genres = await db.getAllGenres();
    res.render('templatePage', { genres: genres, title: "Genres", form: "partials/genres"});
}

exports.genresPost = [
    validateGenre,
    async (req, res) => {
        const errors = validationResult(req);
        const genres = await db.getAllGenres();
        if(!errors.isEmpty()){
            //add new genre
            return res.status(400)
                .render('partials/genres', {errors: errors.array(), genres: genres});
        }
        const {genre} = req.body;
        await db.addGenre(genre);
        res.redirect('/genres');
}]

exports.genreGet = async (req, res) => {
    //show genre
    const {id} = req.params;
    const data = await db.getBooksInGenre(id);
    const genre = data[0].genre;
    res.render("filtered", {data: data, genre: genre, title: genre});
}

exports.genreUpdateGet = async (req, res) => {
    const {id} = req.params;
    const [{genre}] = await db.getGenre(id);
    
    res.render("genresForm", {title: 'Update Genre', action: `/genres/${id}`, genre: genre})
}


exports.genrePost =  [
    validateGenre,
    async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const {id} = req.params;
        const [{genre}] = await db.getGenre(id);
        return res.status(400)
            .render('genresForm', {title: 'Update Genre', action: `/genres/${id}`, genre: genre, errors: errors.array()});
    }
    //update genre
    const {id} = req.params;
    const [data] = await db.getBooksInGenre(id);
    const {genre} = data;
    await db.updateGenre(id, genre);
    res.redirect('/genres')
}]

exports.genreDelete = async (req, res) => {
    //delete genre
    const {id} = req.params;
    await db.deleteGenre(id);
    res.redirect('/genres')
}