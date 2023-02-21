import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import db from './db/quotes.json'

const arrayColors = ["#007bdf", "#00bff0", "#ff3c32", "#ff3c32", "#fba905"]

function App() {
  const getRandom =(arrayElements) =>{
    const quantityValues = arrayElements.length;
    const randomIndex = Math.floor(Math.random()*quantityValues); 

    return arrayElements[randomIndex];
  };

  const [quote, setQuote] = useState (getRandom(db));
  const [color, setColor] = useState(getRandom(arrayColors));

  const newQuote = () => {
    setQuote(getRandom(db));
    setColor(getRandom(arrayColors))
  };

  return (
    <div className="App" style={{backgroundColor:color}}>
      <div>
       <QuoteBox 
       quote = {quote} 
       newQuote = {newQuote} 
       color = {color}
       /> 
      </div>
    </div>
  );
}

export default App
