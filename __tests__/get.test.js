const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const { yarnInMyCloset } = require('../data.js');

it('gets the yarn endpoint', async done => {
	const myData = yarnInMyCloset;
	const response = await request.get('/yarn');
  
	expect(response.status).toBe(200)
	expect(response.body.message).toEqual(myData)
	done()
  })