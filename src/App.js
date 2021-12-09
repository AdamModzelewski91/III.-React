import React, { useEffect, useState} from 'react';
import './App.css';
import Quote from './Quote'

const App = () => {
const [apiQuotes, setApiQuotes] = useState('')
const [randomNum, setRandomNum] = useState('')
const [currentQuote, setCurrentQuote] = useState(1)

useEffect (() => {    
  const API = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'
  fetch(API)
  .then(response => {
    if (response.ok){
      return response
    }
    throw Error(response.status)
  })
  .then( response => response.json())
  .then(data => {   
    setApiQuotes(data) 
    //first random quote
    setRandomNum([Math.floor(Math.random()*data.length)])  
  })},[])    

  const handleRandomNum = () => {   
    let APIAmount =  apiQuotes.length
    const newRunNum = Math.floor(Math.random() * APIAmount)     
    setRandomNum(prev => [...prev, newRunNum])     
  }  
  
  const handlePrevNum = () => {
    if(currentQuote < randomNum.length ){
      setCurrentQuote(prev => prev + 1)
    }
  }

  const quote = 
    <Quote 
      key={randomNum.length}
      randomNum={randomNum}
      apiQuotes={apiQuotes}
      currentQuote={currentQuote}  
      callback={handleRandomNum}           
     />
        
  return (
    <div className='wrapper'>
      <h1>III. React</h1>
      <div className='app'>
        {randomNum.length > 1 ? <button onClick={handlePrevNum}>Poprzedni cytat</button> : null}
        <button onClick={handleRandomNum}>Nastepny cytat</button>
        {quote}
      </div>
    </div>
  );
}

export default App;
