
import './App.css';
import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';

import { increment,decrement,incrementByAmount } from './app/counterSlices';
function ReduxCounter() {
  //const [counter,setCounter]=useState(0)
  const counter=useSelector((state)=>state.counter.value)  
  //const dispatch=useDispatch()

  return (
    <div className="App">
      <h1>Redux Counter: {counter}</h1>
      <Child />
      {/* using useContexthook */}
      
    </div>
  );
}

export default ReduxCounter;

function Child() {
    const dispatch=useDispatch();
    const counter=useSelector((state)=>state.counter.value)
    const Incrementcount=()=>{
        dispatch(increment())
    } 
    const Decrementcount=()=>{
        if(counter>0)
        dispatch(decrement())
    } 
  return (
    <div>
      
      <button onClick={Incrementcount}>Increase Counter</button>
      <button disabled={counter===0} onClick={Decrementcount}>Decrease Counter</button>
      
    </div>
  );
}
