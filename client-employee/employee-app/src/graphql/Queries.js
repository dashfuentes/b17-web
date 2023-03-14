import { gql } from "@apollo/client"

export const GET_EMPLOYEE = gql`

query getEmployees{
    getEmployees {
        _id 
        name
        code
        position
    }
}
`