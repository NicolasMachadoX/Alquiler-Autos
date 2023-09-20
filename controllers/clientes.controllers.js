const Clientes = require('../models/Clientes');

const getClientes = async (req,res) =>{
    try {
        const clientes = await Clientes.find();
        res.json({data: clientes})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}


const getClientesDNI = async (req,res) =>{
    try {
        const DNIesp = '12345678'
        const clientes = await Clientes.find({DNI:DNIesp});
        res.json({data: clientes})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}



//Esto se hace en el archivo de la base de datos Alquiler
const getClientesAlquilerMin1 = async (req,res) =>{
    
    try {
        const clientes = await Clientes.find({DNI:true});
        res.json({data: clientes})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getClientes,
    getClientesDNI,
    getClientesAlquilerMin1
}