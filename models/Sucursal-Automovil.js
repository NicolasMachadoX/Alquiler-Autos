const { ObjectId } = require('mongodb');
const {Schema, model} = require('mongoose');

const sucursalAutomovilSchema = Schema({
    id_sucursal:{
        type:ObjectId,
        required: [true, 'El id_alquiler es necesario']
    },
    id_automovil:{
        type:ObjectId,
        required: [true, 'El id_empleado es necesario']
    },
    cantidad_disponible:{
        type:Number,
        required: [true, 'cantidad_disponible necesaria']
    }

});

module.exports = model('sucursalAutomovils', sucursalAutomovilSchema);