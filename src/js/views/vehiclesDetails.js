import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";



export const VehiclesDetails = () => {
  const { store } = useContext(Context)
  const [vehicles, setVehicles] = useState({})
  let { id } = useParams();
  useEffect(() => {
    const vehicles = store.vehicles.filter((vehicle) => { return vehicle.uid === id })[0]
    setVehicles(vehicles)
  }, [])
  return (
    <div className="card mb-3 wm-75  m-auto " >
      <div className="row g-0 ">
        <div className="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="img-fluid rounded-start" style={{ width: '700px', height: '500px' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title text-danger ">{vehicles.properties && vehicles.properties.name}</h4>
            <p className="card-text">{vehicles.description && vehicles.description}</p>
            <div className="card my-5" >
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-primary">Model: {vehicles.properties && vehicles.properties.model}</li>
                <li className="list-group-item text-primary">Cargo capacity: {vehicles.properties && vehicles.properties.cargo_capacity}</li>
                <li className="list-group-item text-primary">Passengers: {vehicles.properties && vehicles.properties.passengers}</li>
                <li className="list-group-item text-primary">Max-speed: {vehicles.properties && vehicles.properties.max_atmosphering_speed}</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}