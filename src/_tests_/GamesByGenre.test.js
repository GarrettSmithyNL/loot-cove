import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GamesByGenre from '../components/GamesByGenre'; 

// Test for headings in the GamesByGenre component
test('renders GamesByGenre', () => {
  render(<GamesByGenre />);
  const element = screen.getByText(/Games by genre/i);
  expect(element).toBeInTheDocument();
  
});