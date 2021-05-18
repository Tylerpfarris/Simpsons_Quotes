import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
   rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
      return res(
        ctx.json([
          {
            quote:
              'Shoplifting is a victimless crime, like punching someone in the dark.',
            character: 'Nelson Muntz',
            image:
              'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
            characterDirection: 'Left',
          },
        ])
      );
   })
)

describe('SimpsonsQuote', () => {
   
   beforeAll(() => server.listen());
   afterAll(() => server.close());

   it('renders a single quote on button click', async () => {
      render(<SimpsonsQuote />)
      await screen.findByText('Simpsons Quote')
   
      const buttonEl = await screen.findByRole('button')
      await fireEvent.click(buttonEl);

      return waitFor(() => {
         screen.getAllByAltText('Nelson Muntz');
         screen.getByText(
           'Shoplifting is a victimless crime, like punching someone in the dark.'
         );
      })
   } )
})