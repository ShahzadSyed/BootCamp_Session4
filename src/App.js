import React ,{useState} from 'react';
import {Message} from './Message.js'
import './App.css';

function App() {
  
  let [count, setCount] = useState(0)
  let [isMorning, setMorning] = useState(true)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>BootCamp Seesion 04 - UseState with Props</h1>
      <h2>Day Time = {isMorning ? 'Morning' : 'Night'}</h2>
      {/* <h2>Value of counter variable is : {count}</h2> */}

       <Message  counter={count}/> 

      <button onClick={
        () => setCount (++count)
      }>
        Update button
      </button>

      <button onClick={
        () => setMorning (!isMorning)
      }>
        Update Day
      </button>

    </div>
  );
}

export default App;
