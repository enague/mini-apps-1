var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect('mongodb://localhost/3000')

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('database is connected'));

app.use(express.static('public'));
app.get('/public/app.js')

app.post('/', function(req,res) {
	console.log(req.body);
	res.end();
})

var formOne = mongoose.Schema({
	name: String,
	email: String,
	password: String,
})

var formTwo = mongoose.Schema({
	line1: String,
	line2: String,
	city: String,
	state: String,
	zipcode: Number,
	phoneNumber: Number
})

var formThree = mongoose.Schema({
	creditCard: Number,
	expiryDate: Number,
	CVV: Number,
	billingZipCode: Number
})

var Customer1 = mongoose.model('Customer1', formOne)
var Customer2 = mongoose.model('Customer2', formTwo)
var Customer3 = mongoose.model('Customer3', formThree)


app.listen(3000, () => console.log('Server listening to 3000'))

