import { Schema, model } from "mongoose";

const employeeSchema = new Schema( {
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number
    },
    position: {
        type: String
    },
    code: {
        type: String
    }
} );
export default model('Employee', employeeSchema)