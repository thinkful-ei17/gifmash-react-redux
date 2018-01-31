import React from 'react';
import GifContainer from './gif-container';
import Standings from './standings';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>GIF-MASH</h1>
      <GifContainer />
      <Standings />
    </div>
  )
}
