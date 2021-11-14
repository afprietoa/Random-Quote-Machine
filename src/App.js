import React, {useState} from 'react'
import { QuoteBox } from './components/QuoteBox'
import { getRandomIndex } from './helpers/getRandomIndex'
import { quoteData } from './helpers/quoteData'


export const App = () => {

  const [quote, setQuote] = useState(quoteData[getRandomIndex()])

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }

  return (
    <div className="main">
      <h3>Random Quote Machine</h3>
      <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
    </div>
  )
}

