require('dotenv').config();
const express = require('express');
const portalRouter = require('./routes/portalRouter');
const genresRouter = require('./routes/genresRouter');
const booksRouter = require('./routes/booksRouter');

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.use('/', portalRouter);
app.use('/genres', genresRouter);
app.use('/books', booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on http://localhost:${PORT}`))