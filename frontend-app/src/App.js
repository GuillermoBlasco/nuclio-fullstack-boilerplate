import React from 'react';
import './App.css';
import {CleanButton, DialButton} from "./DialButton";

const Display = props => {
  return <div className="App-display">{props.content}</div>
};

function App() {
  const [number, setNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const addNumber = n => setNumber(number + '' + n);
  const cleanNumber = () => setNumber('');
  return (
    <div className="App">
        <CleanButton number={number} onClick={cleanNumber} />
        <Display content={number} />
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
    </div>
  );
}

export default App;
