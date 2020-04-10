import React from 'react';
import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="Page">
      <header className="Page-header">
        <img src={logo} className="Page-logo" alt="logo" />
        <p>
          Home
        </p>
        <a
          className="Page-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
