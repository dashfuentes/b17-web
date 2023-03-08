const express = require( 'express' );
const app = express();
const { buildSchema } = require( 'graphql' );
const { graphqlHTTP } = require( 'express-graphql' );


const schema = buildSchema( `

    type Query {
        getWelcome:String
        getAge : Int
    }
`)

function getWelcomeEmployee() {
    return 'hello world!!'
}
function getAge() {
     return 1+ 3
}
 
const root = {
    //Metodos de schema / funciones que resolveran esos metodos
    getWelcome: getWelcomeEmployee,
    getAge: getAge
}

app.use( '/api/graphql', graphqlHTTP( {
    schema: schema,
    rootValue: root,
    //Activa cliente API
    graphiql: true
}))


app.listen( 3000, () => {
    return console.log('server is running!!')
})