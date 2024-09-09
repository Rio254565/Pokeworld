import React from 'react';
import './homepage.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-content">
          <a href="#home" className="nav-link">Home</a>
          <a href="#category" className="nav-link">Category</a>
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </nav>
      <div className="main-body">
        <h1 className="overlay-text">Welcome to My Homepage</h1>
      </div>
    </div>
  );
}

export default App;
