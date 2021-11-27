import "./App.css";
import { useState } from "react";
import Button from "./Button";

function App() {
  const [inputExpression, setInputExpression] = useState("");
  const [outputExpression, setOutputExpression] = useState("");
  const ligatures = [
    1,
    2,
    3,
    "+",
    4,
    5,
    6,
    "-",
    7,
    8,
    9,
    "*",
    "C",
    0,
    "=",
    "/",
  ];
  return (
    <div className="main-form">
      <h1>Calulator Using React.js</h1>
      <div class="calculator">
        <div className="display-screen" id="display-screen">
          <input
            type="text"
            disabled
            className="input-expression"
            id="input-expression"
            value={inputExpression}
          />
          <div id="output-expression">{outputExpression}</div>
        </div>
        {ligatures.map((el) => (
          <Button
            key={el}
            content={el}
            input={inputExpression}
            setInput={setInputExpression}
            output={outputExpression}
            setOutput={setOutputExpression}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
