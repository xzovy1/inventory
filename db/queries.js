const db = require('./pool');

async function getAllBooks() {
    const {rows} = await db.query("SELECT * FROM books");
    return rows;
}

async function addBook(title, author, quantity, description, price, quantity, genre_id) {
   await db.query(
        "INSERT INTO books (title, author, description, price, quantity, fk_genre) VALUES ($1, $2, $3, $4, $5, $6)", 
        [title, author, description, price, quantity, genre_id]
    );
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
    addBook,
    getAllGenres,
    addGenre,
}