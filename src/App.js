import React from 'react';
import pimage from './img/pic.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <img src={pimage} alt="p-image" />
    </div>
  );
}

export default App;
