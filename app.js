const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.json({ greeting: 'Hello World!' });
})

app.get('/new', (req, res) => {
	res.json({ new: 'object' });
})

module.exports = {
	app
}