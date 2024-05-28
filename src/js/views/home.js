import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "./card";

export const Home = () => {
	const { store } = useContext(Context);
	if (!store.people) return null;


	return (

		<div >
			<div className="row ">
				<h3 className="text-danger m-3">Characters</h3>
				<div className="scroll text-white mt-3 d-flex horizontal-scroll ">
					{
						store.people.map(characters => (
							<div className="col-12 col-md-3">
								<Card key={characters.properties.uid} uid={characters.uid} type={'characters'} name={characters.properties.name} >
									<h5 className="text-secondary ">Birth year-{characters.properties.birth_year}</h5>
									<h5 className="text-secondary ">Gender-{characters.properties.gender}</h5>
									<h5 className="text-secondary ">Height-{characters.properties.height}</h5>
								</Card>
							</div>

						))}

				</div>
			</div>

			<div className="row">
				<h3 className="text-danger m-3">Vehicles</h3>
				<div className="scroll text-white mt-3 d-flex horizontal-scroll">
					{
						store.vehicles.map(vehicles => (
							<div className="col-12 col-md-3">
								<Card key={vehicles.properties.uid} uid={vehicles.uid} type={'vehicles'} name={vehicles.properties.name} >
									<h5 className="text-secondary ">Model-{vehicles.properties.model}</h5>
									<h5 className="text-secondary ">Capacity-{vehicles.properties.cargo_capacity}</h5>
									<h5 className="text-secondary ">Passengers-{vehicles.properties.passengers}</h5>

								</Card>
							</div>

						))}
				</div>
			</div>

			<div className="row">
				<h3 className="text-danger m-3">Planets</h3>
				<div className="scroll text-white mt-3 d-flex horizontal-scroll">
					{
						store.planets.map(planets => (
							<div className="col-12 col-md-3 ">
								<Card key={planets.properties.uid} uid={planets.uid} type={'planets'} name={planets.properties.name} >
									<h5 className="text-secondary ">Population-{planets.properties.population}</h5>
									<h5 className="text-secondary ">Terrain-{planets.properties.terrain}</h5>
									<h5 className="text-secondary ">Diameter-{planets.properties.diameter}</h5>

								</Card>
							</div>

						))}
				</div>

			</div>

		</div>
	)

};
