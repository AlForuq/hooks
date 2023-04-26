import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({ count: 0, name: "" });

  return (
    <div>
      <div>
        <h1>Count: {data.count}</h1>
        <h1>Name:{data.name}</h1>
        <button onClick={() => setData({ ...data, count: data.count + 1 })}>
          +
        </button>
        <button onClick={() => setData({ ...data, count: data.count - 1 })}>
          -
        </button>

        <input
          onChange={({ target: { value } }) =>
            setData({ ...data, name: value })
          }
        />
      </div>
    </div>
  );
}

export default App;
