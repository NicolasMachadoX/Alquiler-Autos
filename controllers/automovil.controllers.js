const Automovil = require('../models/Automovil');

const getAutomovilesDisponibles = async (req,res) =>{
    try {
        const autos = await Automovil.find({estado:true});
        res.json({data: autos})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const getMas5Personas = async (req,res) =>{
    try {
        const autos = await Automovil.find({capacidad: {$gt:5}});
        res.json({data: autos})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const getMarcaModelo = async (req,res) =>{
    try {
        const autos = await Automovil.aggregate([{
            $group:{
                _id: "$_id",
                Marca_Modelo: {$push:{modelo: "$modelo", marca: "$marca" }} 
            }},{ $project:{
                _id: 0,
                Marca_Modelo: 1
            }}]);
        res.json({data: autos})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const getCapacidad5 = async (req,res) =>{
    try {
        const autos = await Automovil.find({capacidad: {$eq:5}});
        res.json({data: autos})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getAutomovilesDisponibles,
    getCapacidad5,
    getMarcaModelo,
    getMas5Personas

}