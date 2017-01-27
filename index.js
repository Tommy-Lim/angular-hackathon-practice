var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(process.env.PORT || 3000);
