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
	  var results = [];
	  var getValues= function(body) {
	    var person=[]
	    for(key in body) {
	      if(key !== 'children') {
	        person.push(body[key]);
	      } else if(key === 'children') {
	        results.push(person)
	        var children = body[key]
	        for(var i = 0; i < children.length; i++) {
	          getValues(children[i]);
	        }
	      }
	    }
	  }

	  getValues(body);
	  return results.join('\n');
	}

	res.end(makeIntoCSV(req.body));
})

app.listen(3000, ()=> console.log('listening to port 3000'));

