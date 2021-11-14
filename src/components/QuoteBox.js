import React from 'react'

export const QuoteBox = ({ quote, handleNewQuote }) => {
    return (
        <div id="quote-box">
    <hr/><br/>
    <p id="text"><span class="fa fa-quote-left fa-1x"></span> {quote.text} <span class="fa fa-quote-right fa-1x"></span></p>  
    <h2 id="author">{quote.author}</h2>
    <hr/><br/>
    <div class="actions">
    <a 
         href="https://twitter.com/intent/tweet"
         id="tweet-quote"
         target="_blank"
       >
         <span class="fa fa-twitter fa-3x"></span>
      </a>
      <a
        id="new-quote" 
        class="button"
        onClick={handleNewQuote} 
        >
        <span class="fa fa-arrow-circle-right fa-3x"></span>
      </a>
      
    </div>
  </div>
    )
}
