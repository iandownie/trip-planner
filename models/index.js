var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

// var Hotel = require("Hotel");
// var Restaurant = require("Restaurant");
// var ToDo = require("ToDo");
// var Place = require("Place");
var Place;
var Hotel;
var Restaurant;
var ToDo;

var Schema=mongoose.Schema;

var placeSchema=new Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	location: [Number]
});

var Place = mongoose.model('Place', placeSchema);

var hotelSchema=new Schema({
	name: String,
	place: [placeSchema],
	num_stars: {type: Number, min: 1, max: 5},
	amenities: String  //*correct?*//
});

var Hotel = mongoose.model('Hotel', hotelSchema);

var restaurantSchema=new Schema({
	name: String,
	place: [placeSchema],
	cuisine: String,
	price: {type: Number, min: 1, max:5}
})

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

var toDoSchema=new Schema({
	name: String,
	place: [placeSchema],
	age_range: String
});

var ThingToDo = mongoose.model('Thing', toDoSchema);


module.exports = {
  Place : Place,
  Hotel: Hotel,
  Restaurant: Restaurant,
  ThingToDo: ThingToDo
};