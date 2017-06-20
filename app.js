const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();
const directory = require('./36d3402e-data.js');

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/directory', function(req, res){
  res.render('directory', directory);
});


app.listen(3000, function(){
  console.log('Express app listening for connections');
});
