import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";



export const PeopleDetails = () => {
  const { store } = useContext(Context)
  const [character, setCharacter] = useState({})
  let { id } = useParams();
  useEffect(() => {
    const character = store.people.filter((character) => { return character.uid === id })[0]
    setCharacter(character)
  }, [])
  return (
    <div className="card mb-3 wm-75  m-auto " >
      <div className="row g-0 ">
        <div className="col-md-4">
          <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid rounded-start" style={{ width: '700px', height: '500px' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title text-danger ">{character.properties && character.properties.name}</h4>
            <p className="card-text">{character.description && character.description}</p>
            <div className="card my-5" >
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-primary">Gender: {character.properties && character.properties.gender}</li>
                <li className="list-group-item text-primary">Birth year: {character.properties && character.properties.birth_year}</li>
                <li className="list-group-item text-primary">Height: {character.properties && character.properties.height}</li>
                <li className="list-group-item text-primary">Mass: {character.properties && character.properties.mass}</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}