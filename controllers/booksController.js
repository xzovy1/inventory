const db = require('../db/queries');


exports.booksGet = async(req, res) => {
    //show all books
    const books = await db.getAllBooks();
    res.render('templatePage', {books: books, title: 'Books', form: 'books'});
}

exports.newBookPost = async (req, res) => {
    const genres = await db.getAllGenres();
    res.render('bookForm', {genres: genres});
}

exports.booksPost = async(req, res) => {
    //add new book
    const { title, author, description, price, quantity, genre_id } = req.body;
    await db.addBook(title, author, description, price, quantity, genre_id);
    res.redirect('/books');
}

exports.bookGet = async (req, res) => {
    //show book
    const {id} = req.params;
    const info = await db.getBookInfo(id);
    const book = info[0];
    console.log(id, book);
    res.render("bookInfo", {book: book})
}

exports.bookPost = (req, res) => {
    //update book
}

exports.bookDelete = async (req, res) => {
    //delete book
    await db.deleteBook(req.params.id);
    res.redirect('/books');
}