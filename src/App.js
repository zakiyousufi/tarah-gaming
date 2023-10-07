import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Games from './components/Games';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-page">
        <Home />
        <Games />
        <Contact />
      </div>
    </div>
  );
}

export default App;
