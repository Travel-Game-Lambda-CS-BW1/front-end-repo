import React from "react";
import axios from "axios";
import useForm from "react-hook-form";

const Register = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		console.log("user input", data);

		axios
			.post("https://travel-game-python.herokuapp.com/api/registration/", {
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<input name="username" defaultValue="test" ref={register} />
			<br />
			<input name="password" ref={register({ required: true })} />
			{errors.usernameRequired && <span>This field is required</span>}
			<br />
			<input type="submit" />
		</form>
	);
};

export default Register;
