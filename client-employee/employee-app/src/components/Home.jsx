import React,{useEffect,useState} from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_EMPLOYEE } from '../graphql/Queries'

export const Home = () => {

    const [searchEmployee, { data, error }] = useLazyQuery( GET_EMPLOYEE );

    searchEmployee()
    if ( data ) {
        console.log(data)
    }

    if(error)  return <h1>Error: {error}</h1>
   
    
  return (
      <div className="bg-red-900">
         <p className="text-slate-200">Home</p>
      </div>
  )
}
