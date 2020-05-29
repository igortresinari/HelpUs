const express = require('express');
const OngController = require('./controllers/OngController');
const UserpfController = require('./controllers/UserpfController');
const EventController = require('./controllers/EventController');
const EventListController = require('./controllers/EventListController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const SessionPFController = require('./controllers/SessionPFController');
const SearchController = require('./controllers/SearchController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);
routes.post('/sessionspf', SessionPFController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/userpf', UserpfController.index);
routes.post('/userpf', UserpfController.create);

routes.get('/profile', ProfileController.index);

routes.get('/events', EventController.index);
routes.post('/events', EventController.create);
routes.delete('/events/:id', EventController.delete);

routes.post('/search', SearchController.create);
routes.get('/eventlist', EventListController.index);

module.exports = routes;