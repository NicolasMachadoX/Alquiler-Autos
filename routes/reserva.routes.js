//Desestructuro Router desde express y cargo router con todo su poder
const {Router} = require('express');
const router = Router();
//requiero los controladores
const { getDatosReservaPendAuto, getReservaPorCliente, getReservaClienteID, postReserva } = require('../controllers/reserva.controllers');

//defino las routas de cada controlador respectivo 
router
.get('/datosReserva', getDatosReservaPendAuto )
.get('/reservaCliente', getReservaPorCliente )
.get('/reservaCliente/:id', getReservaClienteID)
.post('/nuevaReserva', postReserva)



module.exports = router;