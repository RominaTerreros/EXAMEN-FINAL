const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    contacto:{
        type: String,
        required: true,
    },
    preferencias:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    contrasena:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('cliente',clientSchema);