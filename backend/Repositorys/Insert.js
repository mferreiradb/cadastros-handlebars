const User = require('../models/User.js');

const Insert = (req, res) => {
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
};

module.exports = Insert;
