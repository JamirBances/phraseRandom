import React from 'react';
import { useState } from 'react';
import quotes from "../quotes.json"

const QuoteBox = () => {

  let randomIndex = Math.floor(Math.random()* quotes.length);

  console.log(quotes[randomIndex].author);
  console.log(quotes[randomIndex].quote);

  const [random, setRandom] = useState(randomIndex)

  const pressButton = () => { 
    let anotherRandomIndex = Math.floor(Math.random()* quotes.length);
    setRandom(anotherRandomIndex);
  }


  const arrayColor = ["#1E6FFF", "#D95BDF", "#FF5EA8", "#FF8C75", "#FFC559", "#F9F871"];
  let randomColors = Math.floor(Math.random()* arrayColor.length);
  document.body.style = `background-color: ${arrayColor[randomColors]}`;

  return (
    <div className='QuoteBoxContainer'>
      <div className="phraseContainer">
        <i class="fa-solid fa-quote-left" style={{color: `${arrayColor[randomColors]}`}}></i>
        <h2 style={{color: `${arrayColor[randomColors]}`}}>{quotes[random].quote}</h2>
      </div>
      <span style={{color: `${arrayColor[randomColors]}`}}>-{quotes[random].author}</span>
      <button onClick={pressButton} style={{backgroundColor: `${arrayColor[randomColors]}`}}><i class="fa-solid fa-shuffle"></i></button>
    </div>
  );
};

export default QuoteBox;