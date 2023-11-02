import React from 'react'
import quotesData from '../quote.json';
import Quote from './Quote';

const QuoteCardList = () => {
  return (
    <div >
      {quotesData.quotes.map((quote, index) => (
        <Quote key={index} text={quote.quote} author={quote.author} />
      ))}
    </div>
  )
}

export default QuoteCardList