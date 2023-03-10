import server from "./server.js"
//------conexion hacia mongo local
import { connect } from "./database.js";
connect();
//------conexion hacia mongo local

//----conexion hacia mongo atlas
//import "./database.js"
//---conexion hacia mongo atlas

server.start( { port: 3000 }, ( { port } ) => {
    console.log('Sever is running on' + port )
})

