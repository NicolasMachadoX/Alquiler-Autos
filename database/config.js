//requiero a mongoose para poder acceder a la base de datos de MONGODB
const mongoose = require('mongoose');

//Creo la connexion y la exporto 
const dbConnection = async (req,res)=>{
    try {
     await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
     })
     console.log('Conexión exitosa a MongoDB');   
    } catch (error) {
        console.log(error);
        throw new Error('Problemas al conectarse con MongoDB');
    }
};

module.exports = dbConnection;