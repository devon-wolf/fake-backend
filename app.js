const express = require('express');
const cors = require('cors');
const { yarnInMyCloset } = require('./data.js');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.json({ greeting: 'Hello World!' });
})

app.get('/new', (req, res) => {
	res.json({ new: 'object' });
})

app.get('/yarn', (req, res) => {
	res.json(yarnInMyCloset);
})

module.exports = {
	app
}