const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const { yarnInMyCloset } = require('../data.js');

it('gets the home endpoint', async done => {
	const myData = { greeting: 'This is the home endpoint. Welcome.' };
	const response = await request.get('/');
  
	expect(response.status).toBe(200)
	expect(response.body.message).toEqual(myData)
	done()
  })