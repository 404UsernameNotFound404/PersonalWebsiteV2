import React from 'react';
import logo from './logo.svg';
import Home from './components/HomePage';
import Experience from './components/Experience';
import WhoAmI from './components/WhoAmI';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <WhoAmI />
      <Experience />
    </div>
  );
}

export default App;
