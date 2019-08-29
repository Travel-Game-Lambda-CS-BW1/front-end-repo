import React, { useState, useEffect } from "react";
import axios from "axios";

// Import Components

import Controls from './Controls';

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

  function playerMoves(direction) {
    axios({
      url: 'https://travel-game-python.herokuapp.com/api/adv/move/',
      method: "POST",
      headers: {
        Authorization: `Token ${key}`
      },
      data: {
        direction: direction
      }
    })
      .then(res => {
          console.log("res.data", res.data);
          localStorage.setItem("location", res.data.title);
          setStart(res.data);
      })
      .catch(err => console.log(err));
  }

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
      {/* {start.error_msg && (
        <p className="error-msg">{start.error_msg}</p>
      )} */}
      <Controls playerMoves={playerMoves}/>
    </div>
  );
};
export default TravelGame;
