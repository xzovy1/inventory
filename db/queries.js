const db = require('./pool');

async function getAllBooks() {
    const {rows} = await db.query("SELECT books.id, title, author, description, genre, price ,quantity  FROM books JOIN genres ON books.fk_genres = genres.id;");
    return rows;
}

async function getBooksInGenre(id){
    const {rows} = await db.query("SELECT * FROM genres LEFT JOIN books ON genres.id = books.fk_genres WHERE genres.id = $1;", [id]);
    return rows;
}

async function getBookInfo(id){
    const { rows } = await db.query("SELECT books.id, title, author, description, quantity, price, fk_genres , genre FROM books LEFT JOIN genres ON books.fk_genres = genres.id WHERE books.id = $1", [id]);
    return rows;
}

async function updateBookInfo(title, author, description, price, quantity, genre_id, id){
    console.log(title, author, description, price, quantity, genre_id, id)
    await db.query("UPDATE books SET (title, author, description, price, quantity, fk_genres) = ($1, $2, $3, $4, $5, $6) WHERE books.id = $7", [title, author, description, price, quantity, genre_id, id])
}

async function addBook(title, author, description, price, quantity, genre_id) {
   await db.query(
        "INSERT INTO books (title, author, description, price, quantity, fk_genres) VALUES ($1, $2, $3, $4, $5, $6)", 
        [title, author, description, price, quantity, genre_id]
    );
}

async function deleteBook(bookId){
    await db.query("DELETE FROM books WHERE id = $1", [bookId]);
    const {rows} = await db.query('SELECT * FROM books');
    if(rows.length == 0){
       await resetIdentity()
    }
}

async function resetIdentity(){
    // await db.query('TRUNCATE TABLE genres RESTART IDENTITY CASCADE')
    await db.query('TRUNCATE TABLE BOOKS RESTART IDENTITY')
}

async function getAllGenres(){
    const {rows} = await db.query("SELECT * FROM genres");
    return rows;
}

async function addGenre(genre){
    await db.query("INSERT INTO genres (genre) VALUES ($1)", [genre]);
}

module.exports = {
    getAllBooks,
    getBooksInGenre,
    updateBookInfo,
    addBook,
    getBookInfo,
    getAllGenres,
    addGenre,
    deleteBook,
}