const express = require('express');
const router = express.Router();
const path = require('path');
const personajesController = require('../controllers/personajes_controller');

router.get('/nuevo-personaje', personajesController.getNuevoPersonaje);

router.post('/nuevo-personaje', personajesController.postNuevoPersonaje);

router.get('/:personaje_id', personajesController.getPersonaje);

router.get('/', personajesController.get);

module.exports = router;