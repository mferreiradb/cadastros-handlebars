const express = require('express');
const app = express();
const Handlebars = require('handlebars');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const User = require('./models/User.js');

app.engine('handlebars', handlebars.engine({
	defaultLayout: 'main',
	handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.render('form');
});

app.get('/user', (req, res) => {
	User.findAll({ odrder: [['id', 'asc']] }).then((users) => {
		res.json({ users: users });
	});
});

app.post('/insert', (req, res) => {
	User.create({
		nome: req.body.nome,
		email: req.body.email,
		idade: req.body.idade
	}).then(() => {
		res.json('Cadastro realizado com sucesso');
	}).catch(function (err) {
		res.json(`Cadastro não finalizado. Verifique. Erro: ${err}`);
	});
});

app.listen(8080, () => {
	console.log('Servidor online na url http://localhost:8080');
});