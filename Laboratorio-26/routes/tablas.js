const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();
const path = require('path');
const tablasController = require('../controllers/tablas_controller');

router.get('/', isAuth, tablasController.get);

module.exports = router;