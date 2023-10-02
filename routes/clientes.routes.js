//Desestructuro Router desde express y cargo router con todo su poder
const {Router} = require('express');
const router = Router();
//requiero los controladores
const { getClientes, getClientesDNI, getClientesAlquilerMin1, postCliente } = require('../controllers/clientes.controllers.js');

//defino las routas de cada controlador respectivo 
router
.get('/mostrarClientes', getClientes )
.get('/mostrasClientesDNI', getClientesDNI )
.get('/clientesAlquilerMin1', getClientesAlquilerMin1)
.post('/nuevoCliente', postCliente)



module.exports = router;