import { gql } from "@apollo/client"

export const GET_EMPLOYEE = gql`

query getEmployees{
    getEmployees {
        _id 
        name
        code
        position
        age
    }
}
`

export const LOGIN =  gql`
    query login($email:String, $password: String){
        login(email: $email, password: $password){
            _id
            email
            password
        }
    }

`

export const GET_EMPLOYEE_BY_NAME = gql`
   query getEmployeeByName($name:String){
    getEmployeeByName(name: $name){
         _id 
        name
        code
        position
        age
        
    }
   }

    `