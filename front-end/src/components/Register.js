import React from "react";
import axios from "axios";
import useForm from "react-hook-form";

const Register = props => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("user input", data);

    axios
      .post("https://travel-game-python.herokuapp.com/api/registration/", {
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
    <div style={{ background: "black" }}>
      <h4 style={{ marginBottom: "0", color: "aqua", fontSize: "25px" }}>
        Register
      </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" placeholder="Username" ref={register} />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
