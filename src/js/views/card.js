import React from "react";
import { Link } from "react-router-dom";



export const Card = ({children,name,id}) => {
    return (
        <div className="card" key={id} style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {children}
                <div className="d-flex justify-content-between">
                    <Link to={'/cardDetails'}>Learn more!</Link>
                    <button type="button" className="btn btn-outline-warning"><i className="bi bi-heart float-end"></i></button>

                </div>

            </div>
        </div>
    )
}