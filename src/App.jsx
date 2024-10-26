import React from "react";
import NavBody from "./assets/Header.jsx";
import NavBar from "./assets/Nav.jsx";
import Ads from "./assets/Ads.jsx";
import Mini from "./assets/Miniad.jsx";
import "./index.css";
import "./assets/styles.css";

function App() {
  return (
    <div>
      <NavBar />
      <NavBody />
      <Ads />
      <Mini />
    </div>
  );
}

export default App;
