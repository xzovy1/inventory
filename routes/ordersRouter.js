const {Router} = require('express');
const ordersRouter = Router();
const ordersController = require('..controllers/ordersController.js');

ordersRouter.get('/', ordersController.ordersGet);
ordersRouter.post('/', ordersController.ordersPost);

ordersRouter.get('/:id', ordersController.orderGet);
ordersRouter.post('/:id', ordersController.orderPost);

ordersRouter.post(':id/delete', ordersController.orderDelete);

module.exports = ordersRouter;