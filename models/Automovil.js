const {Schema, model} = require('mongoose');

const automovilSchema = Schema({
    marca:{
        type:String,
        required: [true, 'Marca necesaria']
    },
    modelo:{
        type:String,
        required: [true, 'Modelo necesario']
    },
    Anio:{
        type:Number,
        required: [true, 'Anio necesario']
    },
    tipo:{
        type:String,
        required: [true, 'El tipo es necesario']
    },
    capacidad:{
        type:Number,
        required: [true, 'El capacidad es necesaria']
    },
    precio_diario:{
        type:Number,
        required: [true, 'El precio_diario es necesario']
    },
    estado:{
        type:Boolean
    }

});

module.exports = model('automovil', automovilSchema);