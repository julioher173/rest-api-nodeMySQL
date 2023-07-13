//Conexion bsae de datos
import myslq from "promise-mysql";
import config from "./../config";
console.log("config en database",config)
const  connection = myslq.createConnection({
    host: config.host,
    database: config.database,
    user: config.user, 
    password: config.password
})

const getConnection = () =>{
    return connection;
}

module.exports = {
    getConnection
}