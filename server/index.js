var express = require('express');
var mustacheExpress = require('mustache-express');
var path = require('path');

var app = express();

// Middleware
app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.use('/public', express.static('public'));

// Routes
app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(1337, function() {
  console.log('Running on port 1337');
});
