//Desestructuro Router desde express y cargo router con todo su poder
const {Router} = require('express');
const router = Router();
//requiero los controladores
const { getDatosReservaPendAuto, getReservaPorCliente, getReservaClienteID } = require('../controllers/reserva.controllers');

//defino las routas de cada controlador respectivo 
router
.get('/datosReserva', getDatosReservaPendAuto )
.get('/reservaCliente', getReservaPorCliente )
.get('/reservaCliente/:id', getReservaClienteID)



module.exports = router;