//Requiero a dotenv.config() para acceder a las variables de entorno
const dotenv = require('dotenv').config();

//Requiero a la clase server
const Server = require('./models/Server.js');

//Creo una instancia y llamo al metodo listen para iniciar el servidor
const server = new Server();

server.listen();