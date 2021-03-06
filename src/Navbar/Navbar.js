import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<div>
			<nav className="navbar">
				<Link className="nav-link logo-link" to="/">
					LOGO HERE
				</Link>
				<Link className="nav-link" to="/">
					Home
				</Link>
				<Link className="nav-link" to="/vaccinations">
					Vaccinations
				</Link>
				<Link className="nav-link" to="/cases">
					Cases
				</Link>
			</nav>
		</div>
	);
}

export default Navbar;
