import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

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
    <div>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h1>Travel Game</h1>
        <p>
          Welcome traveller! It is time to get lost in adventure. Let your
          curiosity guide you!
        </p>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </div>
  );
};

export default App;
