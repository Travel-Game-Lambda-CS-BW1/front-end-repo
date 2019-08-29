import React from "react";
import axios from "axios";
import useForm from "react-hook-form";

const Register = props => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		console.log("user input", data);

		axios
			.post(`${process.env.REACT_APP_API_KEY}/api/registration/`, {
				username: data.username,
				password1: data.password1,
				password2: data.password2
			})
			.then(res => {
				console.log(res.data);
				localStorage.setItem("key", res.data.key);
				props.history.push("/game");
			})
			.catch(err => console.log(err));
	};

	return (
		<div>
			<h2 style={{ margin: "20px" }}>Register</h2>
			<form onSubmit={handleSubmit(onSubmit)} style={{ margin: "20px" }}>
				<input
					name="username"
					placeholder="Username"
					defaultValue="test"
					ref={register}
				/>
				<br />
				<input
					name="password1"
					placeholder="Password"
					type="password"
					ref={register({ required: true })}
				/>
				{errors.usernameRequired && <span>This field is required</span>}
				<br />
				<input
					name="password2"
					placeholder="Confirm Password"
					type="password"
					ref={register({ required: true })}
				/>
				{errors.usernameRequired && <span>This field is required</span>}
				<br />
				<input type="submit" style={{ margin: "20px" }} />
			</form>
		</div>
	);
};

export default Register;
