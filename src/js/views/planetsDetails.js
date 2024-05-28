import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";



export const PlanetsDetails = () => {
  const { store } = useContext(Context)
  const [planets, setPlanets] = useState({})
  let { id } = useParams();
  useEffect(() => {
    const planets = store.planets.filter((planet) => { return planet.uid === id })[0]
    setPlanets(planets)
  }, [])
  return (
    <div className="card mb-3 wm-75  m-auto " >
      <div className="row g-0 ">
        <div className="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid rounded-start" style={{ width: '700px', height: '500px' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title text-danger ">{planets.properties && planets.properties.name}</h4>
            <p className="card-text">{planets.description && planets.description}</p>
            <div className="card my-5" >
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-primary">Population: {planets.properties && planets.properties.population}</li>
                <li className="list-group-item text-primary">Diameter : {planets.properties && planets.properties.diameter}</li>
                <li className="list-group-item text-primary">Terrain: {planets.properties && planets.properties.terrain}</li>
                <li className="list-group-item text-primary">Climate: {planets.properties && planets.properties.climate}</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}