const {Schema, model} = require('mongoose');

const registroDevolucionSchema = Schema({
    id_alquiler:{
        type:Number,
        required: [true, 'El id_alquiler es necesario']
    },
    id_empleado:{
        type:Number,
        required: [true, 'El id_empleado es necesario']
    },
    fecha_devolucion:{
        type:Date,
        required: [true, 'Fecha_devolucion necesaria']
    },
    combustible_devuelto:{
        type:Number,
        required: [true, 'combustible_devuelto necesario']
    },
    kilometraje_devuelto:{
        type:Number,
        required: [true, 'El kilometraje_devuelto es necesario']
    },
    monto_adicional:{
        type:Number,
        required: [true, 'El monto_adicional es necesario']
    }

});

module.exports = model('registro-devolucion', registroDevolucionSchema);