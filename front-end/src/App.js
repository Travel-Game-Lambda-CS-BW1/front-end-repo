import React from "react";
import useForm from "react-hook-form";

import "./App.css";

const App = () => {
	const { register, handleSubmit, watch, errors } = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	console.log(watch("username"));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input name="username" defaultValue="test" ref={register} />
			<input name="password" ref={register({ required: true })} />
			{errors.usernameRequired && <span>This field is required</span>}
			<input type="submit" />
		</form>
	);
};

export default App;
