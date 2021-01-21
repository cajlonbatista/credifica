const routes = require('express').Router();

const clientsController = require('../controllers/Clients');
const Models = require('../controllers/Models');
const solicitationController = require('../controllers/Solicitation');

routes.post('/client', clientsController.create);
routes.get('/client', clientsController.show);
routes.get('/client/:cpf', clientsController.index);

routes.post('/solicitation', solicitationController.create);
routes.get('/solicitation/:id', solicitationController.index);


routes.post('/model', Models.create);
routes.get('/model', Models.show);

module.exports = routes;