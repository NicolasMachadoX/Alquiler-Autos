const { ObjectId } = require('mongodb');
const {Schema, model} = require('mongoose');

const reservaSchema = Schema({
    id_cliente:{
        type:ObjectId,
        required: [true, 'El id_cliente es necesario']
    },
    id_automovil:{
        type:String,
        required: [true, 'El id_automovil es necesario']
    },
    fecha_reserva:{
        type:Date,
        required: [true, 'El fecha_reserva es necesario']
    },
    fecha_inicio:{
        type:Date,
        required: [true, 'El fecha_inicio es necesario']
    },
    fecha_fin:{
        type:Date,
        required: [true, 'El fecha_fin es necesario']
    },
    estado:{
        type:String,
        required: [true, 'El estado es necesario']
    },

});

module.exports = model('reserva', reservaSchema);