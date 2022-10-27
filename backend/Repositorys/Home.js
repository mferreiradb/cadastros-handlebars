const User = require('../models/User.js');

const Home = (req, res) => {
	User.findAll({ order: [['id', 'asc']] }).then((users) => {
		res.render('Home', { users });
	});
};

module.exports = Home;