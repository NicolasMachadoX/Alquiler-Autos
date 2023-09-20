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
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const getMarcaModelo = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const getCapacidad5 = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
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