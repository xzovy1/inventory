require('dotenv').config();
const express = require('express');
const portalRouter = require('./routes/portalRouter');
const genresRouter = require('./routes/genresRouter');
const booksRouter = require('./routes/booksRouter');
const path = require('node:path');

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use('/', portalRouter);
app.use('/genres', genresRouter);
app.use('/books', booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on http://localhost:${PORT}`))