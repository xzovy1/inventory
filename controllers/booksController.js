const db = require('../db/queries');
const { body, validationResult} = require('express-validator');

const alphaErr = "must only contain letters";
const alphaNumericErr = "must only contain letters and numbers";
const lengthErr = "must be between 1 and 40 characters";

const validateInput = [
    body(['title', 'author'])
        .trim()
        .isLength({min: 1, max: 40}).withMessage(`Author and Title fields  ${lengthErr}`)
        .matches(/[A-Za-z 0-9]/).withMessage(`Author and Title fields ${alphaNumericErr}`),
    body('description')
        .trim()
        .isLength({min: 10, max: 250}).withMessage("Description must be between 10 and 250 characters"),
    body('price')
        .trim()
        .isDecimal().withMessage("Price must be to two decimal places")
        .isLength({min: 1}).withMessage("Price must have a value"),
    body('quantity')
        .trim()
        .isNumeric().withMessage("Price must be a number")
        .isLength({min: 1}).withMessage("Quantity must have a value")    
]

exports.booksGet = async(req, res) => {
    //show all books
    const books = await db.getAllBooks();
    res.render('templatePage', {books: books, title: 'Books', form: 'partials/books'});
}

exports.newBookGet = async (req, res) => {
    //load new book form
    const genres = await db.getAllGenres();
    res.render('bookForm', {genres: genres, title: 'Add Book', book: {}, action: '/books'});
}

exports.booksPost = [
    validateInput,
    async(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const genres = await db.getAllGenres();
            return res.status(400).render('bookForm', {genres: genres, title: 'Add Book', book: {}, action: '/books', errors: errors.array()})
        }
    //add new book
    const { title, author, description, price, quantity, genre_id } = req.body;
    await db.addBook(title, author, description, price, quantity, genre_id);
    res.redirect('/books');
}]

exports.bookGet = async (req, res) => {
    //show book info
    const {id} = req.params;
    const [book] = await db.getBookInfo(id);
    res.render("bookInfo", {book: book, action: '/book'})
}

exports.bookUpdateGet = async (req, res) => {
    //load book update form
    const {id} = req.params;
    const genres = await db.getAllGenres();
    const [book] = await db.getBookInfo(id);
    res.render('bookForm', {genres: genres, title: 'Update Book', action: `/books/${id}/update`, book: book});
}

exports.bookUpdatePost = [
    validateInput,
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const genres = await db.getAllGenres();
            return res.status(400).render('bookForm', {genres: genres, title: 'Add Book', book: req.body, action: '/books', errors: errors.array()})
        }
    //update book
    const { title, author, description, price, quantity, genre_id } = req.body;
    const { id } = req.params;
    await db.updateBook(title, author, description, price, quantity, genre_id, id);
    res.redirect(`/books/${id}`);
}]

exports.bookDelete = async (req, res) => {
    //delete book
    await db.deleteBook(req.params.id);
    res.redirect('/books');
}