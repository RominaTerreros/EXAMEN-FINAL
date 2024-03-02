const mongoose = require('mongoose');

const mentorSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    carrera:{
        type: String,
        required: true,
    },
    competencia:{
        type: String,
        required: true,
    },
    servicio:{
        type: String,
        required: true,
    },
    contacto:{
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

module.exports = mongoose.model('mentor',mentorSchema);