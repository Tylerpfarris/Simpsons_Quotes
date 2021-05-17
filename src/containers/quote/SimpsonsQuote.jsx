import React, { useState } from 'react';
import { fetchSimpsons } from '../../services/simpsonsApi';
import Load from '../../components/quote/Load';
import Quote from '../../components/quote/Quote';

const SimpsonsQuote = () => {
   
   const [quote, setQuote] = useState({})

  const handleOnClick = async () => {
     const quote = await fetchSimpsons();
      setQuote(quote)
   }
  return (
    <>
      <h1>Simpsons Quote</h1>
        <Load onClick={handleOnClick} />
        <Quote  quote={quote.quote} character={quote.character} image={quote.image} />
    </>
  );
}

export default SimpsonsQuote;