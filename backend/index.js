const express = require('express');
const app = express();
const Handlebars = require('handlebars');
const handlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const Insert = require('./Repositorys/Insert.js');
const Form = require('./Repositorys/Form.js');
const Delete = require('./Repositorys/Delete.js');
const Home = require('./Repositorys/Home.js');

app.engine('handlebars', handlebars.engine({
	defaultLayout: 'main',
	handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', Home);

app.get('/cad', Form);

app.post('/insert', Insert);

app.get('/deletar/:id', Delete);

app.listen(8080, () => {
	console.log('Servidor online na url http://localhost:8080');
});