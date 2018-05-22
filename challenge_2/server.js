var http = require('http');
var express = require('express');
var path = require('path');
var app = express();




app.use(express.static('client'));


app.listen(3000, ()=> console.log('listening to port 3000'));

