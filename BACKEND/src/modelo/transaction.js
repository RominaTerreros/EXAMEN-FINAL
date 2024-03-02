const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    fecha:{
        type: String,
        required: true,
    },
    servicio:{
        type: String,
        required: true,
    },
    cliente:{
        type: String,
        required: true,
    },
    proveedor:{
        type: String,
        required: true,
    },
    costo:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('transaccion',transactionSchema);