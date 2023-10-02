const Clientes = require('../models/Clientes');
const Alquiler = require('../models/Alquiler');


const postCliente = async (req,res) =>{

    const cliente = new Clientes(req.body);
    
    try {
        const data = await cliente.save();
        res.json({data})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}




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
        const alquiler = await Alquiler.aggregate([
            {
                $lookup: {
                    from: "clientes",
                    localField: "id_cliente",
                    foreignField: "_id",
                    as: "cliente"
                }
            }
        ])
       
    
        res.json({ data: alquiler});
       
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getClientes,
    getClientesDNI,
    getClientesAlquilerMin1,
    postCliente
}