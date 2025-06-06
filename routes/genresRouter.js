const {Router} = require('express');
const genresRouter = Router();
const genresController = require('../controllers/genresController');

genresRouter.get('/', genresController.genresGet);
genresRouter.post('/', genresController.genresPost);

genresRouter.get('/:id', genresController.genreGet);
genresRouter.post('/:id', genresController.genrePost);

genresRouter.post(':id/delete', genresController.genreDelete);


module.exports = genresRouter;