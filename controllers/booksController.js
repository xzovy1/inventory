const db = require('../db/queries');


exports.booksGet = async(req, res) => {
    //show all books
    const books = await db.getAllBooks();
    const genres = await db.getAllGenres();
    res.render('books', {books, genres});
}

exports.booksPost = async(req, res) => {
    //add new book
    const { title, author, description, price, quantity, genre_id } = req.body;
    await db.addBook(title, author, description, price, quantity, genre_id);
    res.redirect('/books');
}

exports.bookGet = (req, res) => {
    //show book
}

exports.bookPost = (req, res) => {
    //update book
}

exports.bookDelete = async (req, res) => {
    //delete book
    await db.deleteBook(req.params.id);
    res.redirect('/books');
}