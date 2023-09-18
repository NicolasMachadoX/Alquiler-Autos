//Desestructuro Router desde express y cargo router con todo su poder
const {Router} = require('express');
const router = Router();
//requiero los controladores
const { getAutomovilesDisponibles, getMas5Personas, getMarcaModelo, getCapacidad5 } = require('../controllers/automovil.controllers');

//defino las routas de cada controlador respectivo 
router
.get('/automovilesDisponibles', getAutomovilesDisponibles )
.get('/capacidadmas5personas', getMas5Personas )
.get('/getMarcaModelo', getMarcaModelo)
.get('/capacidad5 ', getCapacidad5 )



module.exports = router;