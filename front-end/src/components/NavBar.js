import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav style={{ margin: "20px" }}>
			<ul style={{ display: "flex", justifyContent: "space-evenly" }}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;
