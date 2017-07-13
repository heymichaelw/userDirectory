const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();
const directory = require('./36d3402e-data.js');
const filteredList = [];

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function(req, res){
  res.render('directory', directory);
});

app.get('/:id', function(req, res){
  function findOne(item){
    return item.id === Number(req.params.id);
  }
  var filteredList = directory.users.find(findOne);
  var context = {model: filteredList};
  res.render('details', context);
});


app.listen(process.env.PORT || 3000, function(){
  console.log('Express app listening for connections');
});
