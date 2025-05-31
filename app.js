const express = require('express');
const usersRouter = require('./routes/usersRouter')
const categoriesRouter = require('./routes/categoriesRouter');
const ordersRouter = require('./routes/ordersRouter');
const productRouter = require('./routes/productsRouter');

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/orders', ordersRouter);
app.use('/products', productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`listening on http://localhost:${PORT}`))