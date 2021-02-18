const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const { yarnInMyCloset } = require('../data.js');

it('gets the home endpoint', async done => {
	const myData = { greeting: 'This is the home endpoint. Welcome.' };
	const response = await request.get('/');
  
	expect(response.status).toBe(200)
	expect(response.body).toEqual(myData)
	done()
  })

  it('gets the yarn endpoint', async done => {
	const myData = yarnInMyCloset;
	const response = await request.get('/yarn');
  
	expect(response.status).toBe(200)
	expect(response.body).toEqual(myData)
	done()
  })

  it('gets a single yarn endpoint', async done => {
	const myData = {
        "id": 3,
        "name": "Grace",
        "brand": "Patons",
        "material": "cotton (mercerized)",
        "color": "green",
        "yarn_weight": "sport",
        "quantity": 3,
        "partials": false
    };
	
	const response = await request.get('/yarn/3');
  
	expect(response.status).toBe(200)
	expect(response.body).toEqual(myData)
	done()
  })