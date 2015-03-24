var express=require('express');
var mongoose=require('mongoose');
var parser=require('body-parser');
var logger=require('morgan')('dev');
var swig=require('swig');

var app=express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));




app.listen(1337, function(){
	console.log("starting server");
});

