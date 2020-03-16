import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUsername] = React.useState('');
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome <code>{username}</code> to NDS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Username</p>
        <input onChange={event => setUsername(event.target.value)} type="text" />
        <p>Email</p>
        <input type="email" />
        <p>Password</p>
        <input type="password" />
        <button disabled={username === ''}>Signup</button>
      </header>
    </div>
  );
}

export default App;
