import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 
  const [counter , setCounter] = useState(1)

  const nextHandler = () =>{
    console.log("Button clicked");
    setCounter(counter + 1)
  }
  const previousHandler = () =>{
    console.log("Button clicked");
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px'
      }}>
        <p
        style={{
          fontSize: counter == 1 ? "30px" : "16px",
        }}>1</p>
        <p
        style={{
          fontSize: counter == 2 ? "30px" : "16px",
        }}
        >2</p>
        <p
        style={{
          fontSize: counter == 3 ? "30px" : "16px",
        }}
        >3</p>
      </div>
      <div>
        <button onClick={nextHandler}>Next</button>
        <button onClick={previousHandler}>Previous</button>
      </div>
    </div>
  );
}

export default App;
