const express = require( 'express' );
const app = express();
const { buildSchema } = require( 'graphql' );
const { graphqlHTTP } = require( 'express-graphql' );
const {books} = require('./data.json')


const schema = buildSchema( `

    type Query {
        getWelcome:String
        getAge : Int
        getPersonalInfo(name:String, age:Int): String
        getBooks: [Book]
    }

    type Book {
        id: Int
        title: String
        author: String
        date: String
    }


`)

function getWelcomeEmployee() {
    return 'hello world!!'
}
function getAge() {
     return 1 + 3
}
function getPersonalInfo(args) {
    return "Hello" + args.name + "your age is: " + args.age
}
function getBooks(){
return books
}
 
const root = {
    //Metodos de schema / funciones que resolveran esos metodos
    getWelcome: getWelcomeEmployee,
    getAge: getAge,
    getPersonalInfo,
    getBooks: getBooks
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