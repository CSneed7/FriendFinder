var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, './app/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, './friend-finder/routing/apiroutes.js'))(app);
require(path.join(__dirname, './friend-finder/routing/htmlroutes.js'))(app);

app.listen(PORT, function() {
  console.log('Pokemon Pal app is listening on PORT: localhost:' + PORT);
});