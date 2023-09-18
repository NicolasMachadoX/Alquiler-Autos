//Desestructuro Router desde express y cargo router con todo su poder
const {Router} = require('express');
const router = Router();
//requiero los controladores
const { getEmpleadosCargoVendedor, getEmpleadosCargos } = require('../controllers/empleado.controllers');

//defino las routas de cada controlador respectivo 
router
.get('/empleadosCargoVendedor', getEmpleadosCargoVendedor)
.get('/empleadosCargos', getEmpleadosCargos)

module.exports = router;