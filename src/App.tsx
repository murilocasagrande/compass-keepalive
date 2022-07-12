import React from 'react';
import './App.css';
import Login from './components/Login';
import { GlobalStyle } from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Login />
    </div>
  );
}

export default App;
