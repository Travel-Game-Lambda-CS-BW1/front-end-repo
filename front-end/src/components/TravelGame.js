import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

// Import Components

import Controls from './Controls';
import Map from './Map';

// Styled Components

const PageWrap = styled.div`
  margin: 0 auto;
`

const ErrorMessage = styled.p`
  color: red;
  font-weight: 600;
  font-size: 1rem;
  height: 1.4rem;
`

// TravelGame Component

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
    <div style={{ background: "black", color: "aqua", padding: "20px" }}>
    <Map currentRoom={!start ? (null) : (start.title)}/>
      <Controls playerMoves={playerMoves}/>
      {!start ? (
        <h3>Loading Player..</h3>
      ) : (
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-around"
          }}
        >
          <h2 style={{ paddingTop: "10px" }}>
            Current Player: {}
            {start.name}
          </h2>
          <div>
            <h3>Location:</h3>
            <p>{start.title}</p>
            <p>{start.description}</p>
          </div>
        </div>
      )}
      {!start ? (
        null
      ) : (<ErrorMessage>{start.error_msg}</ErrorMessage>)}
    </PageWrap>
  );
};
export default TravelGame;
