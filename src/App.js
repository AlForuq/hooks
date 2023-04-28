import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";

function App() {
  const [data, setData] = useState({
    count: 0,
    name: "",
  });

  const [mode, setMode] = useState(
    localStorage.getItem("boolean") === "false" ? false : true
    // above code works because the value is coming as string type from Local Storage
  );
  const plus = () => {
    setData({ ...data, count: data.count + 1 });
  };
  const minus = () => {
    setData({ ...data, count: data.count - 1 });
  };

  const onMode = () => {
    localStorage.setItem("boolean", !mode);
    setMode(!mode);
  };

  const G = createGlobalStyle`
    body{
      background-color: ${({ theme }) => theme.bg};
      color: ${({ theme }) => theme.cl};
    }

    button{
      background-color: ${({ theme }) => theme.cl};
      color: ${({ theme }) => theme.bg};
    }
  `;

  const theme = {
    bg: mode ? "white" : "#333",
    cl: mode ? "#333" : "white",
  };

  return (
    <ThemeProvider theme={theme}>
      <G />
      <button onClick={onMode}>{mode ? "Dark" : "Light"}</button>
      <h1>Hooks Count: {data.count}</h1>
      <h1>Hooks Name: {data.name}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={() => localStorage.clear()}>Clear Local Storage</button>

      <input
        onChange={({ target: { value } }) => setData({ ...data, name: value })}
      />
    </ThemeProvider>
  );
}

export default App;
