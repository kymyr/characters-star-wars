import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from '../src/components/CharacterList';

test('renders Star Wars Characters heading', () => {
  render(<CharacterList />);
  const headingElement = screen.getByText(/Star Wars Characters/i);
  expect(headingElement).toBeInTheDocument();
});

