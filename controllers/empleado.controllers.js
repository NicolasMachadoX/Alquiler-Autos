const Empleados = require('../models/Empleado.js');


const getEmpleadosCargoVendedor = async (req,res) =>{
    try {
        const empleados = await Empleados.find({cargo:"Vendedor"});
        res.json({data: empleados})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}




const getEmpleadosCargos = async (req,res) =>{
    try {
        const empleados = await Empleados.find({cargo:['Asistente','Gerente']});
        res.json({data: empleados})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getEmpleadosCargoVendedor,
    getEmpleadosCargos
}