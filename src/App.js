import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import PageModule from './components/PageModule';
import Index from './components/Index';
import Footer from './components/Footer';

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
      {/* <Index/> */}
      <div id="about-container">
        <PageModule title="About"/>
      </div>
      {/* <PageModule title="Skills" /> */}
      <div id="resume-container">
        <PageModule title="Resume" />
      </div>
      <div id="something-container">
        <PageModule title="lorem ipsum title" />
      </div>
      <div id="contact-container">
        <PageModule title="Contact" />
      </div>

      <Footer/>
    </div>
  );
}

export default App;
