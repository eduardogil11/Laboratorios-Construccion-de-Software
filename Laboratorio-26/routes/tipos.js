const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();
const path = require('path');
const tiposController = require('../controllers/tipos_controller');

router.get('/nuevo-tipo', isAuth, tiposController.getTipo);

router.post('/buscar', tiposController.postBuscar);

module.exports = router;