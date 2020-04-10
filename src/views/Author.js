import React from 'react';
import logo from './logo.svg';
import './Author.css';

function Author() {
  return (
    <div className="Page">
      <header className="Page-header">
        <img src={logo} className="Page-logo" alt="logo" />
        <p>
          Author
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

export default Author;
