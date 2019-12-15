import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

function App(props) {
  console.log(props);
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;
