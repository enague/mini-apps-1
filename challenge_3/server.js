var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/public/app.js')

app.listen(3000, () => console.log('Server listening to 3000'))

