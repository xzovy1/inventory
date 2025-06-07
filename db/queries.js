const db = require('./pool');

async function getAllBooks() {
    const {rows} = await db.query("SELECT * FROM books");
    return rows;
}

async function getBooksInGenre(id){
    const {rows} = await db.query("SELECT * FROM books LEFT JOIN genres ON fk_genre = genres.id WHERE genres.id = $1;", [id]);
    return rows;
}

async function addBook(title, author, description, price, quantity, genre_id) {
   await db.query(
        "INSERT INTO books (title, author, description, price, quantity, fk_genre) VALUES ($1, $2, $3, $4, $5, $6)", 
        [title, author, description, price, quantity, genre_id]
    );
}

async function deleteBook(bookid){
    await db.query("DELETE FROM books WHERE id = $1", [bookid]);
}

async function getAllGenres(){
    const {rows} = await db.query("SELECT * FROM genres");
    return rows;
}

async function addGenre(genre){
    await db.query("INSERT INTO genres (name) VALUES ($1)", [genre]);
}


module.exports = {
    getAllBooks,
    getBooksInGenre,
    addBook,
    getAllGenres,
    addGenre,
    deleteBook,
}