const routes = require('express').Router();

const clientsController = require('../controllers/Clients');
const solicitationController = require('../controllers/Solicitation');

routes.post('/client', clientsController.create);
routes.get('/client', clientsController.show);
routes.get('/client/:cpf', clientsController.index);
routes.put('/client/:cpf', clientsController.update);

routes.post('/solicitation', solicitationController.create);
routes.get('/solicitation/:id', solicitationController.index);
routes.put('/solicitation/:id', solicitationController.update);
routes.get('/solicitation', solicitationController.show);
routes.get('/solicitations', solicitationController.all);


module.exports = routes;