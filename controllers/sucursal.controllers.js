const sucursalAutomovil = require('../models/Sucursal-Automovil')

//Esto debe ser hecho en sucursal-automovil
const getTotalAutosCadaSucursal = async (req,res) =>{
    try {

        
        const data = await sucursalAutomovil.aggregate([{
            $group: {
              _id: "$id_sucursal",
              totalAutos: { $sum: "$cantidad_disponible" }
            }
          }
        ])
       
    
        res.json({ data});


    } catch (error) {
     res.status(404).json({message:error});   
    }
}



const getTotalAutosCadaSucursalDireccion = async (req,res) =>{
    try {
        const data = await sucursalAutomovil.aggregate([
          
            {
                $lookup: {
                    from: "sucursal",
                    localField: "id_sucursal",
                    foreignField: "_id",
                    as: "sucursal"
                }
            },{
                $unwind: "$sucursal"
            }, {
                $project: {
                    _id: 0,
                    nombre: "$sucursal.nombre",
                    totalAutos: "$cantidad_disponible",
                    direccion: "$sucursal.direccion"
                }
            }
        ])
       
    
        res.json({msg:data })  
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getTotalAutosCadaSucursal, getTotalAutosCadaSucursalDireccion

}