var pokemonList = require('../data/pokemon.js');
module.exports = function(app){
  app.get('/api/pokemon', function(req,res){
    res.json(pokemonList);
  });
  app.post('/api/pokemon', function(req,res){
    var newPokemonScores = req.body.scores;
    var scoresArray = [];
    var pokemonCount = 0;
    var bestMatch = 0;
    for(var i = 0; i < pokemonList.length; i++){
      var scoresDiff = 0;
      for(var j = 0; j < newPokemonScores.length; j++){
        scoresDiff += (Math.abs(parseInt(pokemonList[i].scores[j]) - parseInt(newPokemonScores[j])));
      }
      scoresArray.push(scoresDiff);
    }
    for(var i = 0; i < scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }
    var pokemon = pokemonList[bestMatch];
    res.json(pokemon);
    pokemonList.push(req.body);
  });
};