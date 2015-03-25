var express = require('express');
var router = express.Router();
var models = require('../models');
var async = require('async');


router.get('/', function(req, res, next){
	res.render('planner');
});



module.exports = router;