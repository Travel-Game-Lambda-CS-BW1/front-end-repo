import React, { useState, useEffect } from "react";
import axios from "axios";

const TravelGame = () => {
  const [start, setStart] = useState();
  const [key, setKey] = useState();

  useEffect(() => {
    setKey(localStorage.getItem("key"));
    console.log("App.js useEffect, setKey to", localStorage.getItem("key"));
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

  console.log("start", start);
  console.log("token", "Token " + key);
  return (
    <div>
      {!start ? (
        <h3>Loading Player..</h3>
      ) : (
        <div>
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
