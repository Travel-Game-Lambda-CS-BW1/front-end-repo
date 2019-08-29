import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./PrivateRoute";
import Register from "./components/Register";
import TravelGame from "./components/TravelGame";
import Home from "./components/Home";

const App = props => {
	const [key, setKey] = useState();

	useEffect(() => {
		setKey(localStorage.getItem("key"));
		console.log("App.js useEffect, setKey to", localStorage.getItem("key"));
	}, []);

	return (
		<div>
			<NavBar />
			<div style={{ textAlign: "center" }}>
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<PrivateRoute exact path="/game" component={TravelGame} />
			</div>
		</div>
	);
};

export default App;
