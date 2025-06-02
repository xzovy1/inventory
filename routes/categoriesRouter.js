const {Router} = require('express');
const categoriesRouter = Router();
const categoriesController = require('../controllers/categoriesController');

categoriesRouter.get('/', categoriesController.categoriesGet);
categoriesRouter.post('/', categoriesController.categoriesPost);

categoriesRouter.get('/:id', categoriesController.categoryGet);
categoriesRouter.post('/:id', categoriesController.categoryPost);

categoriesRouter.post(':id/delete', categoriesController.categoryDelete);


module.exports = categoriesRouter;