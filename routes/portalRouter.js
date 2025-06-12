const { Router } = require('express');
const portalRouter = Router();
const portalController = require('../controllers/portalController');


portalRouter.get('/', portalController.homepageGet)

module.exports = portalRouter;