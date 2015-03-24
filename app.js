var express = require('express');
var logger = require('morgan');
var parser = require('body-parser');
var swig = require('swig');
var routes = require('./routes');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var async = require('async');


var app = express();

app.listen(3000, function(){ console.log("Server is running"); });

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(sassMiddleware({
	src: __dirname,
	dest: path.join(__dirname, 'public'),
	debug: true,
	outputStyle: 'compressed',
	prefix:  '/prefix'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use('/', routes);




// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// handle all errors (anything passed into next())
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.log({error: err});
	res.render(
		// ... fill in this part
	);
});