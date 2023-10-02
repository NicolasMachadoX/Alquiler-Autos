const {Schema, model} = require('mongoose');

const clientesSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es necesario']
    },
    apellido:{
        type:String,
        required: [true, 'El apellido es necesario']
    },
    DNI:{
        type:String,
        required: [true, 'El DNI es necesario']
    },
    direccion:{
        type:String,
        required: [true, 'El direccion es necesario']
    },
    telefono:{
        type:String,
        required: [true, 'El telefono es necesario']
    },
    email:{
        type:String,
        required: [true, 'El email es necesario']
    }

});

module.exports = model('clientes', clientesSchema);