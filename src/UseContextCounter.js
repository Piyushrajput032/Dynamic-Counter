import './App.css';
import React, { useState, useContext, createContext } from 'react'

const globaldata = createContext();

function UseContextCounter() {
  const [counter, setCounter] = useState(0)
  return (
    <globaldata.Provider value={{ counter, setCounter }}>
      <div className="App">
        <h1>Context Counter: {counter}</h1>
        <Child />
      </div>
    </globaldata.Provider>
  );
}

function Child() {
  const { counter,setCounter } = useContext(globaldata);

  const handleIncButton = () => {
    setCounter((counter) => counter + 2)
  }
  const handleDecButton = () => {
    setCounter((counter) => counter -1)
  }

  return (
    <div>
      <button onClick={handleIncButton}>Increase Counter</button>
      <button disabled={counter===0} onClick={handleDecButton}>Decrease Counter</button>
    </div>
  );
}

export default UseContextCounter;


