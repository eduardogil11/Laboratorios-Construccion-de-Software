const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();
const path = require('path');
const personajesController = require('../controllers/personajes_controller');

router.get('/nuevo-personaje', isAuth, personajesController.getNuevoPersonaje);

router.post('/nuevo-personaje', isAuth, personajesController.postNuevoPersonaje);

router.get('/:personaje_id', isAuth, personajesController.getPersonaje);

router.get('/', isAuth, personajesController.get);

module.exports = router;