var express = require('express');
var router = express.Router();
var axios = require('axios');
require('dotenv').config();

var BASE_URL = 'https://api.themoviedb.org/3/';
var API_KEY = '?api_key=' + process.env.API_KEY;

router.get('/:id', function (req, res) {
	axios(BASE_URL + 'movie/' + req.params.id + API_KEY)
		.then(function (response) {
			res.json(response.data);
	});
});

module.exports = router;