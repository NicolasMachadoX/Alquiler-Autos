const Reserva = require('../models/Reserva');
const RegistroEntrega = require('../models/Registro-Entrega');
const postReserva = async (req,res) =>{

    const reserva = new Reserva(req.body);
    
    const registro = {
        "id_alquiler": reserva._id,
        "id_automovil":reserva.id_automovil,
        "fecha_inicio": Date.now(),
        "fecha_fin": new Date(),
        "costo_total": Math.random(),
        "estado": "activo"
    }

    const reg = new RegistroEntrega(registro)
    try {
        const data = await reserva.save();
        const data2 = await reg.save();
        res.json({data, data2})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}


const getDatosReservaPendAuto = async (req,res) =>{
    try {
        const reserva = await Reserva.aggregate([
            {
                $lookup: {
                    from: "clientes",
                    localField: "id_cliente",
                    foreignField: "_id",
                    as: "cliente"
                }
            },{
                $match:{estado:"Pendiente"}
            },{
                $lookup: {
                    from: "automovils",
                    localField: "id_automovil",
                    foreignField: "_id",
                    as: "automovil"
                }
            }
        ]);

        res.json({ data: reserva });
    } catch (error) {
     res.status(404).json({message:error});   
    }
}


const getReservaPorCliente = async (req,res) =>{
    try {

        const cliente = req.body.cliente;
        
        const reserva = await Reserva.aggregate([
            {
                $lookup: {
                    from: "clientes",
                    localField: "id_cliente",
                    foreignField: "_id",
                    as: "cliente"
                }
            },
            {
                $unwind:"$cliente"
            }
           ,{
            $match:{ 
                estado: "Pendiente",
                "cliente.nombre": cliente
             }
           }
        ])
       
    
        res.json({ data: reserva});
    } catch (error) {
     res.status(404).json({message:error});   
    }
}


const getReservaClienteID = async (req,res) =>{
    try {
      
        const reserva = await Reserva.aggregate([
            {
                $lookup: {
                    from: "clientes",
                    localField: "id_cliente",
                    foreignField: "_id",
                    as: "cliente"
                }
            }
           ,{
            $match:{ $expr : { $eq: [ '$_id' , { $toObjectId: req.params.id } ] } }
           }
        ])
       
    
        res.json({ data: reserva});
    } catch (error) {
     res.status(404).json({message:error});   
    
    }
}

module.exports = {
    getDatosReservaPendAuto,
    getReservaPorCliente,
    getReservaClienteID,
    postReserva

}
