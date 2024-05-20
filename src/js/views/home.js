import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "./card";

export const Home = () => {
	const { action, store } = useContext(Context);
	if (!store.people) return null;

	console.log(store.vehicles)
	


	return (
		
		<div >{
			 

			store.people.map(people => (
				<div key={people.uid}>
					{people.properties.name}
				</div>
			))

		}{store.vehicles.map(vehicles => (
			<div key={vehicles.uid}>
				{vehicles.properties.name}
			</div>
		))}
		{store.vehicles.map(planets => (
			<div key={planets.uid}>
				{planets.properties.name}
			</div>
		))}


		</div>
	)

};
