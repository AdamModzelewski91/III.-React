import React from 'react';

const Quote = ({randomNum, apiQuotes, currentQuote}) => {
  
  const indexQuote = randomNum[randomNum.length - currentQuote]
  
  const singleQuote = apiQuotes[indexQuote]
  
  const displayQuote = !indexQuote ? 
    null :
    <div className='quote'>
      <h2>{singleQuote.author}</h2>
      <p>{singleQuote.quote}</p> 
    </div>  

  return ( 
    <div>   
       {displayQuote}    
    </div>
   );
}
 
export default Quote;