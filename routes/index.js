var express = require('express');
var router = express.Router();
var indexCtlr = require('../controllers/index');

/* GET home page. */
router.get('/', indexCtlr.index);

module.exports = router;