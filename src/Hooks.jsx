import React, { useEffect, useState } from "react";

function Hook(props) {
  const [names, setName] = useState(props.handleName);

  //   case 3
  useEffect(() => {
    setName(props.handleName);
  }, [props.handleName]);

  return (
    <div style={{ marginTop: "20px" }}>
      <div>
        <h1>Hooks Name: {names}</h1>

        <input onChange={({ target: { value } }) => setName(value)} />
      </div>
    </div>
  );
}

export default Hook;
