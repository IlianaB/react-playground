var express = require('express');
var app = express();
var port = process.env.PORT || 8081;
var genres = require('./routes/genres');
var movies = require('./routes/movies');

require('dotenv').config();

app.get('/', function (req, res) {
	res.send('Working!!');
});

app.use('/genre', genres);
app.use('/movie', movies);

app.listen(port);
console.log('API is running on port: ' + port);