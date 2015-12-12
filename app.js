

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res) {
	res.render('index');
});


app.get('/about', function(req,res) {
	res.render('about');
});

app.get('/projects/buddysystem', function(req,res) {
	res.render('buddysystem');
});

app.get('/projects/pricepad', function(req,res) {
	res.render('pricepad');
});

app.get('/projects/howl', function(req,res) {
	res.render('howl');
});

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});