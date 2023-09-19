//Desestructuro Router desde express y cargo router con todo su poder
const {Router} = require('express');
const router = Router();
//requiero los controladores
const { getAlquileresActivos, getDetalles5julio2023, getAlquileres, get5a7Julio,
        getDetallesAlquilerID, getCostoTotalID } = require('../controllers/alquiler.controllers.js');

//defino las routas de cada controlador respectivo 
router
.get('/clientesAlquileresActivos', getAlquileresActivos )
.get('/detallesAlquileres5Julio2023', getDetalles5julio2023 )
.get('/getAlquileres', getAlquileres)
.get('/get5a7Julio', get5a7Julio )

router
.get('/detallesAlquiler/:id', getDetallesAlquilerID )
.get('/costoTotalAlquiler/:id', getCostoTotalID )
;


module.exports = router;