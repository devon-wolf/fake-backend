const express = require('express');
const cors = require('cors');
const { yarnInMyCloset } = require('./data.js');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.json({ greeting: 'This is the home endpoint. Welcome.' });
})

app.get('/yarn', (req, res) => {
	res.json(yarnInMyCloset);
})

app.get('/yarn/:id', (req, res) => {
	const yarn = yarnInMyCloset.find(yarn => Number(req.params.id) === yarn.id);

	res.json(yarn);
})

module.exports = {
	app
}