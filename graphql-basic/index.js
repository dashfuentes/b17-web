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
    type Mutation {
        addBook(id:Int, title:String, author:String): [Book]
        updateBook(id:Int, title:String, author:String) : Book
    }

    type Book {
        id: Int
        title: String
        author: String
       
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
function addBook({id,title,author}) {

    //insertar el objeto en el arreglo de libros
    books.push({id,title,author})
    //retornar los libros
    return books
}
function updateBook( { id, title, author } ) {

   var bookFounded =  books.find( book => {
       if ( book.id === id ) {
           
            book.title = title ? title : book.title
            book.author = author ? author : book.author
        }
        return book
   } )
    
    console.log( 'after find', bookFounded )
    return bookFounded
   
}
 
const root = {
    //Metodos de schema / funciones que resolveran esos metodos
    getWelcome: getWelcomeEmployee,
    getAge: getAge,
    getPersonalInfo,
    getBooks: getBooks,
    addBook,
    updateBook
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