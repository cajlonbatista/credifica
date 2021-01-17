const routes = require('express').Router();

const clientsController = require('../controllers/Clients');
const solicitationController = require('../controllers/Solicitation');

routes.post('/client', clientsController.create);
routes.get('/client', clientsController.show);

routes.post('/solicitation', solicitationController.create);

module.exports = routes;