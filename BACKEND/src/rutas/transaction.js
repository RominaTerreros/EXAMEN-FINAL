const express = require('express');
const controller = require('../controlador/transactioncontroller');
const router = express.Router();

//Create transaction
router.post('/transaction', controller.post);

//Get all transaction

router.get('/transaction',controller.get);


//Get a transaction by id
router.get('/transaction/:id', controller.get_id);


//Update a transaction by id
router.put('/transaction/:id', controller.update);


//Delete a transaction by id
router.delete('/transaction/:id',controller.delete);


module.exports = router;
