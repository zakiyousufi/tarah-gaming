import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-page">
        <Home />
      </div>
    </div>
  );
}

export default App;
