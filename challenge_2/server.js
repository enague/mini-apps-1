var http = require('http');
var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json());

app.use(express.static('client'));

app.post('/csv', function(req, res) {
	console.log("Request url is " + req.url + " and method is " + req.method)
	console.log(req.body)

	//convert req.body to csv
	//res.end with csv
	var makeIntoCSV = function(body) {
		
	}

	makeIntoCSV(req.body);

	res.end(JSON.stringify(req.body));
})

app.listen(3000, ()=> console.log('listening to port 3000'));

