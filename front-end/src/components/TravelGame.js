import React, { useState, useEffect } from "react";
import axios from "axios";

const TravelGame = () => {
  const [room, setRoom] = useState();
  const [key, setKey] = useState();

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
      <button>Start Game</button>
    </div>
  );
};
export default TravelGame;
