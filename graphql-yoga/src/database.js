import mongoose from "mongoose"

///------ conectar mongodb localmente ----------- //
export async function connect() {
    
    try {
        await mongoose.connect( "mongodb://127.0.0.1/mongodbgraphql", {
            useNewUrlParser: true
       } )
        console.log("Database connected!!")
    } catch (error) {
        return console.log('Something went wrong!!', error)
    }
  
}
///------ conectar mongodb localmente ----------- //


///------ conectar con mongo atlas ----------- //

// const uri = "mongodb+srv://dashfuentes:Test123@cluster0.3pioj25.mongodb.net/?retryWrites=true&w=majority"

// mongoose.connect( uri, {
//     useNerUrlParser: true,
//     useUnifiedTopology: true
// }).then( (db) => console.log('DB connected'))
// .catch(err => console.log(err))
///------ conectar con mongo atlas ----------- //
