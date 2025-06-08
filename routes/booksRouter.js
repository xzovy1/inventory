const {Router} = require('express');
const booksRouter = Router();
const booksController = require('../controllers/booksController');

booksRouter.get('/', booksController.booksGet);
booksRouter.post('/', booksController.booksPost);

booksRouter.get('/new', booksController.newBookPost);

booksRouter.get('/:id', booksController.bookGet);
booksRouter.post('/:id', booksController.bookPost);

booksRouter.post('/:id/delete', booksController.bookDelete);

module.exports = booksRouter;