const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();
const path = require('path');
const tiposController = require('../controllers/tipos_controller');

router.get('/nuevo-tipo', isAuth, tiposController.getNuevoTipo);

router.get('/', isAuth, tiposController.get);

module.exports = router;