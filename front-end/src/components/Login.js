import React from "react";
import axios from "axios";
import useForm from "react-hook-form";

const Login = props => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("user input", data);
    axios
      .post("https://travel-game-python.herokuapp.com/api/login/", {
        username: data.username,
        password: data.password
      })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("key", res.data.key);
        props.history.push("/game");
      })
      .catch(err => console.log(err));
  };

  console.log(props);
  return (
    <div style={{ margin: "10" }}>
      <h4 style={{ marginBottom: "0" }}>Login</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" placeholder="Username" ref={register} />
        <br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          ref={register({ required: true })}
        />
        {errors.usernameRequired && <span>This field is required</span>}
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};
export default Login;
