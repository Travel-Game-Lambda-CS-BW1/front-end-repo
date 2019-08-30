import React from "react";
import { Route } from "react-router-dom";
import Register from "./components/Register";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import TravelGame from "./components/TravelGame";

const App = () => {
  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center", background: "aqua" }}>
        <h1
          style={{ marginTop: "0", paddingTop: "30px", paddingBottom: "10px" }}
        >
          Travel Game
        </h1>
        <p>
          Welcome traveller! It is time to get lost in adventure. Let your
          curiosity guide you!
        </p>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/game" component={TravelGame} />
      </div>
    </div>
  );
};

export default App;
