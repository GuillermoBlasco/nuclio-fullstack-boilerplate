import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>Meow, I'm a cat</button>
        <button>Bub, I'm a dog</button>
        <button>Beee, I'm a sheep</button>
        <button>Sshhh, I'm a snake</button>
      </header>
    </div>
  );
}

export default App;
