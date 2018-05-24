var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var Promise = require('promise')
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect('mongodb://localhost/3000')

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('database is connected'));

app.use(express.static('public'));
app.get('/public/app.js')


var customerInfo = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	line1: String,
	line2: String,
	city: String,
	state: String,
	zipcode: Number,
	phoneNumber: Number,
	creditCard: Number,
	expiryDate: Number,
	CVV: Number,
	billingZipCode: Number
});


var Customer = mongoose.model('Customer', customerInfo)

app.post('/', function(req,res) {
	//console.log(req.body);
	//find by id
		//if they exist 
			//update
		//else
			//create new document
	var axl = new Customer(req.body);
	axl.save(function(err, obj) {
		if(err) {
			console.log(err)
		} else {
			res.end(JSON.stringify(obj._id));
		}
	});


})


app.listen(3000, () => console.log('Server listening to 3000'))

