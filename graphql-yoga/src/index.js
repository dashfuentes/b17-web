import server from "./server.js"
import { connect } from "./database.js";
connect();

server.start( { port: 3000 }, ( { port } ) => {
    console.log('Sever is running on' + port )
})

