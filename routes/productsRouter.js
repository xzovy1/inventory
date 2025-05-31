const {Router} = require('express');
const productsRouter = Router();
const productsController = require('..controllers/productsController.js');

productsRouter.get('/', productsController.productsGet);
productsRouter.post('/', productsController.productsPost);

productsRouter.get('/:id', productsController.productGet);
productsRouter.post('/:id', productsController.productPost);

productsRouter.post(':id/delete', productsController.productDelete);

module.exports = productsRouter;