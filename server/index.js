var express = require('express');
var app = express();
var port = process.env.PORT || 8081;
var genres = require('./routes/genres');
var movies = require('./routes/movies');

require('dotenv').config();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', function (req, res) {
	res.send('Working!!');
});

app.use('/genre', genres);
app.use('/movie', movies);

app.listen(port);
console.log('API is running on port: ' + port);