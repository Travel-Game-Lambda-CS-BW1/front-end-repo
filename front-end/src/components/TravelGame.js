import React, { useState, useEffect } from "react";
import axios from "axios";

const TravelGame = () => {
  const [start, setStart] = useState();
  const [key, setKey] = useState();

  useEffect(() => {
    axios
      .get("http://lambda-mud-test.herokuapp.com/api/adv/init/", {
        headers: {
          Authorization: "Token " + key,
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        console.log("res.data", res.data);
        localStorage.getItem("location", res.data.location);
        setStart(res.data);
      })
      .catch(err => console.log(err));
  }, [key]);

  console.log("room", start);
  return (
    <div>
      <h3>Showing rooms..</h3>
    </div>
  );
};
export default TravelGame;
