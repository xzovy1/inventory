const db = require('../db/queries');

const links = [
    {href: '../homepage', text: 'Home'},
    {href: '../genres', text: 'Genres'},
    {href: '../users', text: 'Users'},
]

exports.booksGet = async(req, res) => {
    //show all books
    const books = await db.getAllBooks();
    const genres = await db.getAllGenres();
    res.render('books', {links: links, books: books, genres: genres});
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

exports.bookDelete = (req, res) => {
    //delete book
}