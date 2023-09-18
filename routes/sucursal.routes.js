//Desestructuro Router desde express y cargo router con todo su poder
const {Router} = require('express');
const router = Router();
//requiero los controladores
const { getTotalAutosCadaSucursal, getTotalAutosCadaSucursalDireccion } = require('../controllers/sucursal.controllers');

//defino las routas de cada controlador respectivo 
router
.get('/totalAutosCadaSucursal', getTotalAutosCadaSucursal )
.get('/totalAutosCadaSucursalDireccion', getTotalAutosCadaSucursalDireccion )




module.exports = router;