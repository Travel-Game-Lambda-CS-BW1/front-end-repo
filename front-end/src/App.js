import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "react-hook-form";

import "./App.css";

const App = () => {
	const { register, handleSubmit, errors } = useForm();
	const [key, setKey] = useState();

	useEffect(() => {
		setKey(localStorage.getItem("key"));
		console.log("App.js useEffect, setKey to", localStorage.getItem("key"));
	}, [key]);

	const onSubmit = data => {
		console.log("user input", data);

		axios
			.post("http://lambda-mud-test.herokuapp.com/api/registration/", {
				username: data.username,
				password1: data.password,
				password2: data.password
			})
			.then(res => {
				console.log(res.data);
				localStorage.setItem("key", res.data.key);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="App">
			<h1>LambdaMUD</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="username" defaultValue="test" ref={register} />
				<br />
				<input name="password" ref={register({ required: true })} />
				{errors.usernameRequired && <span>This field is required</span>}
				<br />
				<input type="submit" />
			</form>
		</div>
	);
};

export default App;
