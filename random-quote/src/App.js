import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Quote from './Quote';
import Footer from './Footer';


function App() {
  const [quotes, setQuotes] = useState([]);
  const [bgColor, setBgColor] = useState(['#16a085']);
  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(data => {
      // console.log(data.data.quots)
      setQuotes(data.data.quotes)
    })
    .catch(err => console.log('Error fetching json data'))
  }, [])

  return (
    <div className="App" id="quote-box" style={{backgroundColor: bgColor}}>
      <header className="App-header">
        <p>Random Quote Machine</p>
        <p>to your <code>Twitter</code></p>
      </header>
      {quotes ? 
          <Quote quotes={quotes} bgColor={bgColor} setBgColor={setBgColor} />
        : <p>Loading your quote...</p>
      }
      <Footer />
    </div>
  );
}

export default App;
