


const getEmpleadosCargoVendedor = async (req,res) =>{
    try {
        
    } catch (error) {
     res.status(404).json({message:error});   
    }
}




const getEmpleadosCargos = async (req,res) =>{
    try {
        
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getEmpleadosCargoVendedor,
    getEmpleadosCargos
}