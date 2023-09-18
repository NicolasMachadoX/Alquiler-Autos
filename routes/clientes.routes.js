//Desestructuro Router desde express y cargo router con todo su poder
const {Router} = require('express');
const router = Router();
//requiero los controladores
const { getClientes, getClientesDNI, getClientesAlquilerMin1 } = require('../controllers/clientes.controllers');

//defino las routas de cada controlador respectivo 
router
.get('/mostrarClientes', getClientes )
.get('/mostrasClientesDNI', getClientesDNI )
.get('/clientesAlquilerMin1', getClientesAlquilerMin1)



module.exports = router;