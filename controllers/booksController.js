const db = require('../db/queries');

exports.booksGet = async(req, res) => {
    //show all books
    const books = await db.getAllBooks();
    res.render('templatePage', {books: books, title: 'Books', form: 'books'});
}

exports.newBookGet = async (req, res) => {
    //load new book form
    const genres = await db.getAllGenres();
    res.render('bookForm', {genres: genres, title: 'Add Book', book: {}, action: '/books'});
}

exports.booksPost = async(req, res) => {
    //add new book
    const { title, author, description, price, quantity, genre_id } = req.body;
    await db.addBook(title, author, description, price, quantity, genre_id);
    res.redirect('/books');
}

exports.bookGet = async (req, res) => {
    //show book info
    const {id} = req.params;
    const [book] = await db.getBookInfo(id);
    res.render("bookInfo", {book: book, action: '/book'})
}

exports.bookPost = async (req, res) => {
    console.log(req.body)
}

exports.bookUpdateGet = async (req, res) => {
    //load book update form
    const {id} = req.params;
    const genres = await db.getAllGenres();
    const [book] = await db.getBookInfo(id);
    res.render('bookForm', {genres: genres, title: 'Update Book', action: `/books/${id}/update`, book: book});
}

exports.bookUpdatePost = async (req, res) => {
    //update book
    const { title, author, description, price, quantity, genre_id } = req.body;
    const { id } = req.params;
    await db.updateBookInfo(title, author, description, price, quantity, genre_id, id);
    res.redirect(`/books/${id}`);
}

exports.bookDelete = async (req, res) => {
    //delete book
    await db.deleteBook(req.params.id);
    res.redirect('/books');
}