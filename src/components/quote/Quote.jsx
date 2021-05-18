import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, character, image }) {
  return (
    <figure>
      <h3>{character}</h3>
      <img src={image} alt={character} />
      <figcaption>{quote}</figcaption>
    </figure>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

Quote.defaultProps = {
   quote: '',
   character: '',
   image: ''
}

export default Quote;
