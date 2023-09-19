const {Schema, model} = require('mongoose');

const alquilerSchema = Schema({
    id_cliente:{
        type:String,
        required: [true, 'El id_cliente es necesario']
    },
    id_automovil:{
        type:String,
        required: [true, 'El id_automovil es necesario']
    },
    fecha_inicio:{
        type:Date,
        required: [true, 'Fecha necesaria']
    },
    fecha_fin:{
        type:Date,
        required: [true, 'Fecha necesaria']
    },
    costo_total:{
        type:Number,
        required: [true, 'El costo_total es necesario']
    },
    estado:{
        type:String,
        required: [true, 'El costo_total es necesario']
    }

});

module.exports = model('alquiler', alquilerSchema);