

const getTotalAutosCadaSucursal = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}



const getTotalAutosCadaSucursalDireccion = async (req,res) =>{
    try {
        res.json({msg:'funciono uwu'})  
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getTotalAutosCadaSucursal, getTotalAutosCadaSucursalDireccion

}