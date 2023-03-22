import Employee from "../models/Employee.js"
import User from "../models/User.js"

const Query = {


    async getEmployees() {
        const employees = await Employee.find();
        return employees
    },

    async login(_,{email,password} ) {
        const verifyUser = await User.findOne( { email, password } ); //[]
        console.log(verifyUser)
         return verifyUser
    },
    async getEmployeeByName( _, { name } ) {
        const searchEmployeeByName = await Employee.find( { name :name } );
        console.log( 'getting employee', searchEmployeeByName );

       return searchEmployeeByName 
    }
}

export default Query