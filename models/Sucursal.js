const {Schema, model} = require('mongoose');

const sucursalSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es necesario']
    },
    direccion:{
        type:String,
        required: [true, 'El direccion es necesario']
    },
    telefono:{
        type:String,
        required: [true, 'El telefono es necesario']
    },

});

module.exports = model('sucursal', sucursalSchema);