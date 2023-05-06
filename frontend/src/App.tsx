import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [day, setDay] = React.useState("")
  
  useEffect(() => {
    fetch("/api/day")
      .then((res) => res.json())
      .then((data) => setDay(data.day))
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {day}
      </header>
    </div>
  );
}

export default App;
