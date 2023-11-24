import './App.css';
import React, { useEffect } from 'react';

const url = 'https://twp43i3jd6.execute-api.us-east-2.amazonaws.com/dev/getData'

function App() {

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const res = await fetch(url, {mode: 'no-cors'});
    console.log(res);
    const data = await res.json();
    console.log(data);
  }
  
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
