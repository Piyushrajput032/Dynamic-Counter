import "./App.css";
import React, { useState } from "react";

function SimpleCounter() {
  const [counter, setCounter] = useState(0);
//   const handleIncButton = () => {
//     setCounter(counter + 2);
//   };
//   const handleDecButton = () => {

//     setCounter(counter - 1);

//   };


  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <Child data={{setCounter,counter}} />
      {/* using useContexthook */}
    </div>
  );
}

export default SimpleCounter;

function Child(props) {
  const {setCounter,counter}={...props.data}
  return (
    <div>
      <button onClick={()=>setCounter(counter+2)}>Increase Counter</button>
      <button disabled={counter===0} onClick={()=>setCounter(counter-1)}>Decrease Count</button>
    </div>
  );
}
