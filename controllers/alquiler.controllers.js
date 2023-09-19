const Alquiler = require('../models/Alquiler')

const get = async (req,res) =>{
    try {
      
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const get5a7Julio = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}


const getAlquileres = async (req,res) =>{
    try {
        const alquiler = await Alquiler.find();
        res.json({data: alquiler})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}


const getAlquileresActivos = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
        
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const getDetalles5julio2023 = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

//ID

const getDetallesAlquilerID = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const getCostoTotalID = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getAlquileresActivos,
    getDetalles5julio2023,
    getAlquileres,
    get5a7Julio,

    getDetallesAlquilerID,
    getCostoTotalID

}