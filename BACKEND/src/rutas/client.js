const express = require('express');
const controller = require('../controlador/clientcontroller');
const router = express.Router();

//Create client
router.post('/client', controller.post);

//Get all clients

router.get('/client',controller.get);


//Get a client by id
router.get('/client/:id', controller.get_id);


//Update a client by id
router.put('/client/:id', controller.update);


//Delete a client by id
router.delete('/client/:id',controller.delete);


module.exports = router;
