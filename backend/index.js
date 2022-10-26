const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('form');
});

app.listen(8080, function() {
	console.log('Servidor online na url http://localhost:8080');
});