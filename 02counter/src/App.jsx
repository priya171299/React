import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 15;

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter((counter) => counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };

  return (
    <>
      <h1>React course {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <footer>Footer Value : {counter}</footer>
    </>
  );
}

export default App;
