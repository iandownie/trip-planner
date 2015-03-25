var express = require('express');
var router = express.Router();
var models = require('../models');
var async = require('async');

var Hotel=require('../models').Hotel;
var Restaurant=require('../models').Restaurant;
var Place=require('../models').Place;
var ThingToDo=require('../models').ThingToDo;



router.get('/', function(req, res, next){
	Hotel.find({}, function(err, hotels) {
	    Restaurant.find({}, function(err, restaurants) {
	        ThingToDo.find({}, function(err, thingsToDo) {
	            res.render('planner', {
	                all_hotels: hotels,
	                all_restaurants: restaurants,
	                all_things_to_do: thingsToDo
            	});
        	});
    	});
	});
});



module.exports = router;