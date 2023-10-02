const {Schema, model} = require('mongoose');

const empleadoSchema = Schema({
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
    cargo:{
        type:String,
        required: [true, 'El email es necesario'],
        enum: ['Gerente','Asistente']
    }

});

module.exports = model('empleado', empleadoSchema);