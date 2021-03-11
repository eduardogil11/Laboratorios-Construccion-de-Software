const express = require('express');
const router = express.Router();
const path = require('path');
const tiposController = require('../controllers/tipos_controller');

router.get('/nuevo-tipo', tiposController.getNuevoTipo);

router.get('/', tiposController.get);

module.exports = router;