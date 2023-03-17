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
export const REMOVE_EMPLOYEE = gql`
  mutation deleteEmp($_id:ID){
  deleteEmployee(_id: $_id)
{
  _id
  name
  code
  position
  age
}
}
`
export const UPDATE_EMPLOYEE = gql`

mutation updateEmployee($_id: ID,$name:String, $age:Int, $position:String, $code:String){
  updateEmployee(_id: $_id,name:$name, age:$age, position:$position, code: $code){
    _id
    name
    position
    code
    age
  }
}
`