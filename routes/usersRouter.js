const {Router} = require('express');
const usersRouter = Router();
const usersController = require('..controllers/usersController.js');

usersRouter.get('/', usersController.usersGet);
usersRouter.post('/', usersController.usersPost);

usersRouter.get('/:id', usersController.userGet);
usersRouter.post('/:id', usersController.userPost);

usersRouter.post(':id/delete', usersController.userDelete);

module.exports = usersRouter;