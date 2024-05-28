import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Navbar = () => {
	const {actions, store}=useContext(Context)
	useEffect(()=>{
		console.log(store.favorites)
	},[store.favorites])
	
	return (
		<nav className="navbar navbar-collapse bg-light w-100  sticky-top  ">
			<div className="d-flex justify-content-between w-100 p-2">
				<Link to="/" >
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8Hmrqco9q0EkaAhTM7q264uK4NKt3UApsA&s" className="w-25 img-fluid"/>
			    </Link>
			
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites  <span className="text-warning "><strong>{store.favorites.length}</strong> </span>
					</button>
					
					<ul className="dropdown-menu dropdown-menu-end">
                     {
						store.favorites && store.favorites.length > 0 ? (
							store.favorites.map(el => <li className="text-primary px-1" ><strong>{el.name}</strong> <span type="button" className=" text-danger float-end px-1" onClick={()=>actions.removeFavorites(el.name)}>X</span> </li>)
						  ) : (
							<li className="px-3">Empty</li>
						  )}
					 
					</ul>
				</div>
			</div>
			
			
		</nav>
	);
};
