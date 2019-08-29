import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";

import avatar from "../Images/zelda.png";

const TravelGame = () => {
	const [start, setStart] = useState({});
	const [key] = useState();
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		const key = localStorage.getItem("key");

		axios
			.get(`${process.env.REACT_APP_API_KEY}/api/adv/init/`, {
				headers: {
					Authorization: "Token " + key,
					"Content-Type": "application/json"
				}
			})
			.then(res => {
				setStart(res.data);
			})
			.catch(err => console.log(err));
	}, [key]);

	useEffect(() => {
		console.log("App.js useEffect, setKey to", localStorage.getItem("key"));
	}, [key]);

	useEffect(() => {
		const key = localStorage.getItem("key");
		console.log("TravelGame.js key", key);

		axios
			.get("https://travel-game-python.herokuapp.com/api/adv/allrooms/")
			.then(res => {
				setRooms(res.data.rooms);
			})
			.catch(err => console.log(err));
	}, [key]);

	useEffect(() => {
		axios
			.get("https://travel-game-python.herokuapp.com/api/adv/init/", {
				headers: {
					Authorization: `Token ${key}`,
					"Content-Type": "application/json"
				}
			})
			.then(res => {
				console.log("res.data", res.data);
				localStorage.setItem("location", res.data.title);
				setStart(res.data);
			})
			.catch(err => console.log(err));
	}, [key]);

	return (
		<div>
			{!start ? (
				<h3>Loading Player..</h3>
			) : (
				<div>
					<Map rooms={rooms} />
					<img
						src={avatar}
						alt="avatar"
						style={{
							margin: "50px",
							padding: "20px",
							width: "100px",
							border: "1px solid black"
						}}
					/>
					<h2>Current Player</h2>
					<h3>{start.name}</h3>
					<p>{start.location}</p>
					<p>{start.description}</p>
				</div>
			)}
		</div>
	);
};
export default TravelGame;
