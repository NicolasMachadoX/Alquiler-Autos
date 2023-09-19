const {Schema, model} = require('mongoose');

const registroEntregaSchema = Schema({
    id_alquiler:{
        type:Number,
        required: [true, 'El id_alquiler es necesario']
    },
    id_empleado:{
        type:Number,
        required: [true, 'El id_empleado es necesario']
    },
    fecha_entrega:{
        type:Date,
        required: [true, 'fecha_entrega necesaria']
    },
    combustible_entregado:{
        type:Number,
        required: [true, 'combustible_entregado necesario']
    },
    kilometraje_entregado:{
        type:Number,
        required: [true, 'El kilometraje_entregado es necesario']
    }
  

});

module.exports = model('registro-entrega', registroEntregaSchema);