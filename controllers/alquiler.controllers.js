const Alquiler = require('../models/Alquiler')
const { ObjectId } = require('mongodb');

const postAlquiler = async (req,res) =>{

    const alquilerNuevo = new Alquiler(req.body);
    
    try {
        const data = await alquilerNuevo.save();
        res.json({data})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const get5a7Julio = async (req,res) =>{
        try {
            const fechaI= new Date("2023-07-05")
              const fechaF= new Date("2023-07-10")
            const detalles = await Alquiler.aggregate([
                {
                    $match: { $and:{ fecha_inicio: fechaI, fecha_fin: fechaF } }
                },
                {
                    $lookup: {
                        from: "registroEntrega",
                        localField:"_id",
                        foreignField: "id_alquiler",
                        as: "Detalles"
                    }
                },
            ]);
    
            res.json({ data: detalles });
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const getAlquileres = async (req,res) =>{
    try {
        const alquiler = await Alquiler.find();
        res.json({data: alquiler})
    } catch (error) {
     res.status(404).json({message:error});   
    }
}



const getAlquileresActivos = async (req,res) =>{
    try {
        const alquileresConClientes = await Alquiler.aggregate([
            {
                $lookup: {
                    from: "clientes",
                    localField: "id_cliente",
                    foreignField: "_id",
                    as: "cliente"
                }
            },{$match:{estado:"activo" }}
        ]);

        res.json({ data: alquileresConClientes });
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const getDetalles5julio2023 = async (req,res) =>{
    try {
        const fechaEsp = new Date("2023-07-05")
        const detalles = await Alquiler.aggregate([
            {
                $match: { fecha_inicio: fechaEsp }
            },
            {
                $lookup: {
                    from: "registroEntrega",
                    localField:"_id",
                    foreignField: "id_alquiler",
                    as: "Detalles"
                }
            },
        ]);

        res.json({ data: detalles });
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

//ID

const getDetallesAlquilerID = async (req,res) =>{
    try {
     
        console.log(req.params.id);


        const alquileresConClientes = await Alquiler.aggregate([
            {
                $lookup: {
                    from: "registroEntrega",
                    localField:"_id",
                    foreignField: "id_alquiler",
                    as: "Detalles"
                }
            },{
                $match: { $expr: { $eq: ['$_id', {$toObjectId: req.params.id}] }}
            }
        ]);

        res.json({ data: alquileresConClientes });
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

const getCostoTotalID = async (req,res) =>{
    try {
        console.log(req.params.id);


        const alquileresConClientes = await Alquiler.aggregate([
            {
                $lookup: {
                    from: "registroEntrega",
                    localField:"_id",
                    foreignField: "id_alquiler",
                    as: "Detalles"
                }
            },{
                $match: { $expr: { $eq: ['$_id', {$toObjectId: req.params.id}] }
                  
            }
            }
        ]);

        res.json({ data: alquileresConClientes });
    } catch (error) {
     res.status(404).json({message:error});   
    }
}

module.exports = {
    getAlquileresActivos,
    getDetalles5julio2023,
    getAlquileres,
    get5a7Julio,

    getDetallesAlquilerID,
    getCostoTotalID,
    
    postAlquiler

}