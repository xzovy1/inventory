const { Router } = require('express');
const portalRouter = Router();
const portalController = require('../controllers/portalController');

portalRouter.get('/', portalController.loginGet)
portalRouter.post('/', portalController.loginPost)

portalRouter.get('/createUser', portalController.createUserGet);
portalRouter.post('/createUser', portalController.createUserPost);

portalRouter.get('/homepage', portalController.homepageGet)

module.exports = portalRouter;