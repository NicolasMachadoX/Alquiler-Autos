//Requerimos Express y la conexion a la base de datos
const express = require('express');
const dbConnection = require('../database/config');


//Creo una clase Server para poder usar el POO en la estructura del servidor
class Server{

    constructor(){
        //Definimos app y la cargamos con el poder de express
        this.app = express();
        //Defino el valor del puerto usando las variables de entorno
        this.port = process.env.PORT;
        
        this.middlewares();
        //Creo un objeto en el que defino las rutas de cada collecion
        this.paths = {

            cliente: '/api/cliente',
            sucursal: '/api/sucursal',
            reserva: '/api/reserva',
            automovil: '/api/automovil',
            alquiler: '/api/alquiler',
            empleado: '/api/empleado',
            registroDevolucion: '/api/registro-devolucion',
            registroEntrega: '/api/registro-entrega',
            sucursalAutomovil:'/api/sucursal-automovil'
    
        }


        //instancion los metodos del servidor
        this.routes();

       

        this.ConnectionDB();

    }

    //Llamo a la conexion con un await
    async ConnectionDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.json());

    }

    
    //vinculo las rutas definidas en path con los "routes" de la carpetas routes
    routes(){
        this.app.use(this.paths.alquiler , require('../routes/alquiler.routes'));
        this.app.use(this.paths.automovil , require('../routes/automovil.routes'));
        this.app.use(this.paths.cliente , require('../routes/clientes.routes'));
        this.app.use(this.paths.empleado , require('../routes/empleado.routes'));
        this.app.use(this.paths.registroDevolucion , require('../routes/registro-devolucion.routes'));
        this.app.use(this.paths.registroEntrega , require('../routes/registro-entrega.routes'));
        this.app.use(this.paths.reserva , require('../routes/reserva.routes'));
        this.app.use(this.paths.sucursalAutomovil , require('../routes/sucursal-automovil.routes'));
        this.app.use(this.paths.sucursal , require('../routes/sucursal.routes'));
    }

    //Metodo listen del servidor
    listen(){

        this.app.listen(this.port,()=>{

            console.log(`Sistema administrativo de automoviles funcionando en el puerto: ${this.port}`);
        })
    }


}

//exporto las clase Server para instanciarla dentro de app.js
module.exports = Server;