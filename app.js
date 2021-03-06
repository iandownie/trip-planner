var express = require('express');
var logger = require('morgan')('dev');
var parser = require('body-parser');
var swig = require('swig');
var routes = require('./routes');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var async = require('async');


var app = express();

// Swig Setup
swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);

//Turn on the server
app.listen(3000, function(){ console.log("Server is running"); });

//Body parser
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

//SASS middleware connection:
app.use(sassMiddleware({
	src: path.join(__dirname, 'assets'),
	dest: path.join(__dirname, 'public'),
	debug: true
}));
app.use(express.static(path.join(__dirname, 'public')));

//Making Bower accessible
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

//Morgan Logging
app.use(logger);

//Hand off to Routes
app.get('/', routes);

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