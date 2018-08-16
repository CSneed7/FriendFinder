var path = require('path');
var pokemon = require('../data/pokemon.js');
module.exports = function(app) {
	app.get('/api/pokemom', function(req, res) {
		res.json(pokemon);
	});

	app.post('/api/pokemon', function(req, res) {
		var userInput = req.body;

		var userResponses = userInput.scores;
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; 
		for (var i = 0; i < pokemon.length; i++) {
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(pokemon[i].scores[j] - userResponses[j]);
			}
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = pokemon[i].name;
				matchImage = pokemon[i].photo;
			}
		}
		friends.push(userInput);

		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};