const Sequelize = require('sequelize');

const sequelize = new Sequelize('crud', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

sequelize.authenticate().then(function(){
	console.log('Banco de Dados conectado');
}).catch(function(err) {
	console.log('Falha na conexão' + err);
});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
};
