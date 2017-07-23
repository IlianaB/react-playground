var express = require('express');
var router = express.Router();
var request = require('request');
require('dotenv').config();

var BASE_URL = 'https://api.themoviedb.org/3/';
var API_KEY = '?api_key=' + process.env.API_KEY;

router.get('/:id', function (req, res) {
	request(BASE_URL + 'movie/' + req.params.id + API_KEY, function (err, resp, body) {
		res.json(JSON.parse(body));
	})
});

module.exports = router;