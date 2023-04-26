import React, { useEffect, useState } from "react";
import "./App.css";
import Hook from "./Hooks";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("web");

  // case 1
  useEffect(() => {
    console.log("case 1");
  });

  // case 2
  useEffect(() => {
    console.log("case 2");
  }, []);

  // case 3
  useEffect(() => {
    console.log("case 3");
  }, [count]);

  // case 4
  useEffect(() => {
    console.log("case 4");
  }, [count, name]);

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <h1>Name:{name}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>

        <input onChange={({ target: { value } }) => setName(value)} />
      </div>
      <Hook handleName={name} />
    </div>
  );
}

export default App;
