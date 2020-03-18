import React from 'react';
import './App.css';
import {CleanButton, DialButton} from "./DialButton";

const Display = props => {
  return <div className="App-display">{props.content}</div>
};

function App() {
  const [number1, setNumber1] = React.useState(''); // izquierda
  const [number2, setNumber2] = React.useState(''); // derecha
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState('');
  const addNumber = n => {
    if (operation) {
      setNumber2(number2 + '' + n);
    } else {
      setNumber1(number1 + '' + n);
    }
  };
  const cleanNumber = () => {
    if (number2) {
      setNumber2('');
    } else {
      if (operation) {
        setOperation('');
      } else {
        if (number1) {
          setNumber1('');
        }
      }
    }
  };
  const solve =() => {
    // setResult?? <= pista!
  };
  return (
    <div className="App">
        <CleanButton onClick={cleanNumber} />
        <Display content={number1 + operation + number2} />
        <DialButton value={7} onClick={addNumber} />
        <DialButton value={8} onClick={addNumber} />
        <DialButton value={9} onClick={addNumber} />
        <DialButton value="+" onClick={setOperation} />
        <DialButton value={4} onClick={addNumber} />
        <DialButton value={5} onClick={addNumber} />
        <DialButton value={6} onClick={addNumber} />
        <DialButton value="-" onClick={setOperation} />
        <DialButton value={1} onClick={addNumber} />
        <DialButton value={2} onClick={addNumber} />
        <DialButton value={3} onClick={addNumber} />
        <DialButton value="*" onClick={setOperation} />
        <DialButton value={0} onClick={addNumber} />
        <DialButton value="." onClick={addNumber} />
        <DialButton value={9} onClick={addNumber} />
        <DialButton value="/" onClick={setOperation} />
      <button onClick={solve}>=</button>
    </div>
  );
}

export default App;
