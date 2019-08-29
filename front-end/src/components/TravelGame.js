import React, { useState, useEffect } from "react";
import axios from "axios";

const TravelGame = () => {
	const [game, setgame] = useState({});
	const [key] = useState();

	useEffect(() => {
		const key = localStorage.getItem("key");
		console.log("TravelGame.js key", key);

		axios
			.get(`${process.env.REACT_APP_API_KEY}/api/adv/init/`, {
				headers: {
					Authorization: "Token " + key,
					"Content-Type": "application/json"
				}
			})
			.then(res => {
				setgame(res.data);
			})
			.catch(err => console.log(err));
	}, [key]);

	console.log("TravelGame.js game", game);
	console.log("TravelGame.js game.description", game.description);
	console.log("TravelGame.js game.title", game.title);

	return (
		<div style={{ margin: "40px", fontSize: "1.25rem" }}>
			{game.title ? <p>Room name: {game.title}</p> : null}
			{game.description ? <p>Room description: {game.description}</p> : null}
		</div>
	);
};
export default TravelGame;
