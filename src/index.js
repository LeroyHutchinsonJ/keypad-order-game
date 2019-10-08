import React from "react";
import ReactDOM from "react-dom";
import Keypad from "./keypad";
import "./styles.css";

function Index() {
  return (
    <div className="Index">
      <Keypad />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
