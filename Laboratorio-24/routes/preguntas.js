const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();
const path = require('path');
const preguntasController = require('../controllers/preguntas_controller');

router.get('/', isAuth, preguntasController.get);

module.exports = router;