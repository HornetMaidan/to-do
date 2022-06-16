import React from "react";
import "./App.css";
import {Title} from "./Tltle/Title";
import {Input} from "./Input/Input";

function App() {
  return (
      <div className="backGround">
        <div className="App">
            <Title />
        </div>
        <div align="center">
            <Input />
        </div>

      </div>
  );
}

export default App;
