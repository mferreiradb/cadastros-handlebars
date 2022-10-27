const User = require('../models/User.js');

const Delete =  (req, res) => {
	User.destroy({where: {'id': req.params.id}}).then(() => {
		res.render('Confirm');
	}).catch((err) => {
		res.json({mensagem: `Cadastro não excluído. Verifique. Erro: ${err}`});
	});
};

module.exports = Delete;