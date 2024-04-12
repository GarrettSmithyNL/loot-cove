import React from 'react';
import { render } from '@testing-library/react';
import ProductDetails from '../components/ProductDetails';

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1', // The id of the game you want to test
  }),
}));

// Mock the games data
jest.mock('../data/api', () => ({
  games: [
    {
      id: 1,
      name: 'Test Game', // The name of the game you want to test
     
    },
  ],
}));

// Test if the ProductDetails component renders without crashing
test('renders without crashing', () => {
  const { container } = render(<ProductDetails />);
  expect(container).toBeInTheDocument();
});