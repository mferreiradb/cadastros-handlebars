const { Sequelize } = require('./db.js');
const db = require('./db.js');

const User = db.sequelize.define('user', {
	nome: {
		type: Sequelize.STRING
	},
	idade: {
		type: Sequelize.INTEGER
	},
	email: {
		type: Sequelize.STRING
	}
});

module.exports = User;