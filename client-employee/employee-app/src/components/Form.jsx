import React,{useState, useEffect} from "react";
import { CREATE_EMPLOYEE } from "../graphql/Mutation";
import { UPDATE_EMPLOYEE } from "../graphql/Mutation";
import { useMutation } from "@apollo/client";
import { useNavigate, useLocation } from "react-router-dom";

export const Form = () => {
	const navigate = useNavigate()
	const location = useLocation();
	console.log( 'employee info', location.state )
	
	/* Variables globales */
	const [name, setName] = useState( "" );  //var name = ""
	const [age, setAge] = useState( "" )
	const [position, setPosition] = useState( "" )
	const [code, setCode] = useState( "" );
	const [_id, setId] = useState( "" );
	/* Variables globales */

	// const setEmployeeInfo = ( currentState, fieldkey ) => {
		
	// 	Object.keys( currentState ).forEach( function ( key, index ) {
	// 		let valueSettled
	// 		console.log('key', key)
	// 		// key: the name of the object key
	// 		// index: the ordinal position of the key within the object 

	// 		if ( key && key === fieldkey ) // _id == _id
	// 		{
	// 			console.log('in set',currentState[fieldkey])
	// 			valueSettled = currentState[fieldkey] ? currentState[fieldkey] : ""
				
	// 		}
	// 		return valueSettled
			
	// 	});
	// }
	
	
	/* Variables de estado de useLocation */
	const currentState = location.state;
	const employeeId = currentState && currentState !== undefined ? currentState._id : _id
	const employeeName = currentState && currentState !== undefined ?  currentState.name : name ;
	const employeeAge = currentState && currentState !== undefined ? currentState.age : age;
	const employeePosition = currentState && currentState !== undefined ? currentState.position : position;
	const employeeCode = currentState && currentState !== undefined ? currentState.code : code;
	/* Variables de estado de useLocation */

	

	/* Area de Mutaciones */
	const [createEmployee] = useMutation( CREATE_EMPLOYEE, {} );
	const [updateEmployee] = useMutation( UPDATE_EMPLOYEE, {})
	
	/* Area de Mutaciones */

	useEffect( () => {
		
		if ( currentState ) {
			
			setName( employeeName )
			setAge( employeeAge )
			setPosition( employeePosition )
			setCode( employeeCode )
			setId(employeeId)
	  }
	 
	}, [])
	
	
	return (
		<form onSubmit={async ( event ) => {
			event.preventDefault()

			if ( currentState ) {
				//llamar al mutation para actualizar el empleado
				await updateEmployee({variables: {_id, name,age,position,code}})
			} else {
			//Llamar al mutation para crear el employee
			await createEmployee( {
				variables : {name,age,position,code}
			})
			}
			

			//Redirigir al usuario hacia /home
           navigate('/home')
		}}
		>
			<div className="mb-6">
				
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Name
				</label>
				<input
					type="text"
					onChange={ (event) => {
						
						let getNameValue = event.target.value
						console.log(getNameValue)
						setName( getNameValue )
						
						console.log('current name state', name) /// name = "carlos"
					} }
					id="name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					value={name}
					required
				/>
			</div>
			<div className="mb-6">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Age
				</label>
				<input
					type="number"
					onChange={(event) => {
						setAge(event.target.value)
					}}
					id="age"
					value={age}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>

			<div className="mb-6">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Position
				</label>
				<input
					type="text"
					onChange={(event) => {
						setPosition(event.target.value)
					}}
					id="position"
					value={position}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>
			<div className="mb-6">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Code
				</label>
				<input
					type="text"
					onChange={(event) => {
						setCode(event.target.value)
					}}
					id="code"
					value={code}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>
			
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				{currentState ? "Update Employee" : "Create Employee"}
			</button>
		</form>
	);
};
