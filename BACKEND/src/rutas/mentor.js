const express = require('express');
const controller = require('../controlador/mentorcontroller');
const router = express.Router();

//Create mentor
router.post('/mentor', controller.post);

//Get all mentor

router.get('/mentor',controller.get);


//Get a mentor by id
router.get('/mentor/:id', controller.get_id);


//Update a mentor by id
router.put('/mentor/:id', controller.update);


//Delete a mentor by id
router.delete('/mentor/:id',controller.delete);


module.exports = router;
