import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function App() {

const [quote, setQuote] = useState('');
const [currentDate, setCurrentDate] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

useEffect(() => {

    const fetchAdvice = () => {

      axios.get("https://api.adviceslip.com/advice")

      .then((response) => {
        const advice = response.data.slip.advice;
        setQuote(advice);
      })

      .catch((error) => console.log(error))
    }

    fetchAdvice();

    const interval = setInterval(() => {
      setCurrentDate(moment().format('MMMM Do YYYY, h:mm:ss a'))
    },1000);

    return () => clearInterval(interval);
    
}, [])






  return (
    <div className="app">
      <div>
        <div className='content' >
          <span>{currentDate}</span>
          
          <h1><span>Quote of the Day</span>: {quote}</h1>
        </div>
      </div>
      
    </div>
  );
}

export default App;
