import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar  bg-light    ">
			<div className="d-flex justify-content-between w-100 p-2">
				<Link to="/" >
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8Hmrqco9q0EkaAhTM7q264uK4NKt3UApsA&s" className="w-25 img-fluid"/>
			    </Link>
			
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites  <i className="fa-regular fa-square fa-bounce"/>
					</button>
					
					<ul className="dropdown-menu dropdown-menu-end">

					</ul>
				</div>
			</div>
			
			
		</nav>
	);
};
