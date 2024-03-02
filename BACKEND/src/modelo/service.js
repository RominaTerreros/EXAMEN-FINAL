const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    tipo:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    precio:{
        type: String,
        required: true,
    },
    duracion:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('servicio',serviceSchema);