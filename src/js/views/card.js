import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Card = ({children,name,id,uid,type}) => {
    const {actions,store} = useContext(Context)
    return (
        
        <div className="card h-100"  key={id} >
            <img src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`} className="card-img-top w-auto"  style={{width:'400px', height:'300px'}}/ >
            <div className="card-body ">
                <h4 className="card-title text-danger">{name}</h4>
                {children}
                
                    <Link to={`/${type}/${uid}`}>Learn more!</Link>
                    <button type="button" className="btn btn-outline-warning float-end" onClick={()=>actions.addFavorites({name})}>F</button>

                

            </div>
        </div>
    )
}