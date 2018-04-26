//
// Person routes
//
const express = require('express');
const PersonControler = require('../controllers/person_controller')

let routes = express.Router();


routes.get('/person', PersonControler.getAllPersons);
routes.post('/person', PersonControler.createPerson);

routes.get('/person/:id', PersonControler.getPersonByID);
routes.delete('/person/:id', PersonControler.deletePersonByID);

// zo zit het in elkaar ==> Je maakt eigenlijk een functie aan, en die geef je mee aan post. app.METHOC(get, post, put enz...)(PATH(url), HANDELER(de functie)) express.js
// 				let afhandelfunctie = function (req, res, next) {
// 					req.body.lastname;
// 				}
//
// 				app.post('/api/person', afhandelfunctie())
//=====================================================//

module.exports = routes;