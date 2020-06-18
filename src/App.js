import React ,{useState} from 'react';
import {Message} from './Message.js'
import './App.css';

function App() {
  
  let [count, setCount] = useState(0)
  let [isMorning, setMorning] = useState(true)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day Time = {isMorning ? 'Morning' : 'Night'}</h1>
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
