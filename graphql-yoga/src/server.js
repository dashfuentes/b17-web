import resolvers from "./graphql/index.js"
import { GraphQLServer } from "graphql-yoga";
import path from "path"
import { fileURLToPath } from 'url';

//------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname( __filename );
//-----
//relativas    /b17-web

//absolutas   /c/Users/carlf/Desktop/b17-web
const server = new GraphQLServer( {
    typeDefs: path.join( __dirname, "graphql/schema.graphql" ),  // -> /c/Users/carlf/Desktop/b17-web/graphql/schema.graphql //http:heroku-app.com/graphql/schema.graphql"
    resolvers: resolvers                                                     
} )

export default server


