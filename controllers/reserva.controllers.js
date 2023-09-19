const Reserva = require('../models/Reserva');

const getDatosReservaPendAuto = async (req,res) =>{
    try {
        const reserva = await Reserva.find();
        res.json({msg:reserva})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}


const getReservaPorCliente = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}


const getReservaClienteID = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getDatosReservaPendAuto,
    getReservaPorCliente,
    getReservaClienteID

}
