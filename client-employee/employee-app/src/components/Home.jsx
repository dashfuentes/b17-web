import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_EMPLOYEE } from "../graphql/Queries";

export const Home = () => {
	const [searchEmployee, { data, error }] = useLazyQuery(GET_EMPLOYEE);

	useEffect( () => {
		console.log('use effect in home')
		searchEmployee();
	}, []);

	if (data) {
		console.log(data);
	}

	if (error) return <h1>Error: {error}</h1>;

	return (
		<div className="flex gap-4 pt-4">
			{data &&
				data.getEmployees.map(({ _id, name, position, code }) => (
					<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<a href="#">
							<img
								className="rounded-t-lg"
								src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fexplaining%2F&psig=AOvVaw2t0Nyt9UP3GTEVt_UGunvD&ust=1678929084553000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNje3LDg3P0CFQAAAAAdAAAAABAK"
								alt
							/>
						</a>
						<div className="p-5">
							<a href="#">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{name}
								</h5>
							</a>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{position}
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{code}
							</p>
							
						</div>
					</div>
				))}
		</div>
	);
};
