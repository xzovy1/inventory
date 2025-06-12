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

async function updateBook(title, author, description, price, quantity, genre_id, id){
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
       await resetBooksIdentity()
    }
}

async function resetBooksIdentity(){
    return await db.query('TRUNCATE TABLE BOOKS RESTART IDENTITY')
}

async function resetGenresIdentity(){
    return await db.query('TRUNCATE TABLE genres RESTART IDENTITY CASCADE')
}

async function getAllGenres(){
    const {rows} = await db.query("SELECT * FROM genres");
    return rows;
}

async function getGenre(id){
    const {rows} = await db.query("SELECT * FROM genres WHERE id = $1", [id]);
    return rows;
}

async function updateGenre(id, value){
    await db.query("UPDATE genres SET genre = $1 WHERE id = $2", [value, id])
}

async function addGenre(genre){
    await db.query("INSERT INTO genres (genre) VALUES ($1)", [genre]);
}

async function deleteGenre(id){
    await db.query("DELETE FROM genres WHERE id = $1", [id]);
    const {rows} = await db.query('SELECT * FROM genres');
    if(rows.length == 0){
       await resetGenresIdentity()
    }
}

module.exports = {
    getAllBooks,
    getBooksInGenre,
    updateBook,
    addBook,
    deleteBook,
    getBookInfo,
    getAllGenres,
    getGenre,
    addGenre,
    updateGenre,
    deleteGenre
}