import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';

describe('SimpsonsQuote', () => {
   it('renders a single quote on button click', async () => {
      render(<SimpsonsQuote />)
      await screen.findByText('Simpsons Quote')
   
      const buttonEl = await screen.findByRole('button')
      await fireEvent(buttonEl);

   } )
})