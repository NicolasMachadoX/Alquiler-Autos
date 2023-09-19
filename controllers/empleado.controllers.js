


const getEmpleadosCargoVendedor = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}




const getEmpleadosCargos = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getEmpleadosCargoVendedor,
    getEmpleadosCargos
}