import { gql } from "@apollo/client"

export const CREATE_EMPLOYEE = gql`

mutation createEmployee($name:String, $age:Int, $position:String, $code:String){
  
  createEmployee(name:$name, age:$age, position:$position, code: $code){
		_id
        name
        position
        code
        age
    
  }
}

`