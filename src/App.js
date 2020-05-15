import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import PageModule from './components/PageModule';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}

        Hello World!
      </header>
      <PageModule title="lorem ipsum title" />
      <PageModule title="lorem ipsum title" />
      <PageModule title="lorem ipsum title" />
      <PageModule title="lorem ipsum title" />
    </div>
  );
}

export default App;
