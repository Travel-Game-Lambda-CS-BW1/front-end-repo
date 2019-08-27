import React, { useState, useEffect } from "react";
import Register from "./components/Register";

import axios from "axios";

const App = () => {
	const [key, setKey] = useState();
	const [room, setRoom] = useState();

	useEffect(() => {
		setKey(localStorage.getItem("key"));
		console.log("App.js useEffect, setKey to", localStorage.getItem("key"));
	}, []);

	useEffect(() => {
		axios
			.get("http://lambda-mud-test.herokuapp.com/api/adv/init/", {
				headers: { Authorization: "Token " + key }
			})
			.then(res => {
				console.log("res.data", res.data);
				setRoom(res.data);
			})
			.catch(err => console.log(err));
	}, [key]);

	console.log("room", room);

	return (
		<div style={{ textAlign: "center" }}>
			<h1>LambdaMUD</h1>
			{key ? null : <Register />}
			{room ? <p>Title: {room.title} </p> : null}
			{room ? <p>Description: {room.description} </p> : null}
		</div>
	);
};

export default App;
