import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import React from "react";

function App() {
  console.log("hi")
  return (
    <div className="App">
      <Header />
      <div className="fade_rule"></div>
      <Body />
    </div>
  );
}

export default App;
