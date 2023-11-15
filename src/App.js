import './App.css';
import React, { useEffect } from 'react';

const url = 'https://twp43i3jd6.execute-api.us-east-2.amazonaws.com/region-4-escworks/getData'

function App() {

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    fetch(url, {mode: 'no-cors'})
      .then(res => console.log(res));
  }
  
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
