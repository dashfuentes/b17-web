import mongoose from "mongoose"

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
