const express = require('express');
const app = express();
const Handlebars = require('handlebars');
const handlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const User = require('./models/User.js');

app.engine('handlebars', handlebars.engine({
	defaultLayout: 'main',
	handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
	User.findAll({ order: [['id', 'asc']] }).then((users) => {
		res.render('Home',{ users: users });
	});
});


app.get('/cad', (req, res) => {
	res.render('form');
});

app.post('/insert', (req, res) => {
	const {nome, idade, email} = req.body;
	User.create({
		nome,
		idade,
		email
	}).then(() => {
		res.redirect('/');
	}).catch((err) => {
		res.json({mensagem: `Cadastro não finalizado. Verifique. Erro: ${err}`});
	});
});

app.get('/deletar/:id', (req, res) => {
	User.destroy({where: {'id': req.params.id}}).then(() => {
		res.render('Confirm');
	}).catch((err) => {
		res.json({mensagem: `Cadastro não excluído. Verifique. Erro: ${err}`});
	});
});

app.listen(8080, () => {
	console.log('Servidor online na url http://localhost:8080');
});