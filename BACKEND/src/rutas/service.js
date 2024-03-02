const express = require('express');
const controller = require('../controlador/servicecontroller');
const router = express.Router();

//Create service
router.post('/service', controller.post);

//Get all service

router.get('/service',controller.get);


//Get a service by id
router.get('/service/:id', controller.get_id);


//Update a service by id
router.put('/service/:id', controller.update);


//Delete a service by id
router.delete('/service/:id',controller.delete);


module.exports = router;
