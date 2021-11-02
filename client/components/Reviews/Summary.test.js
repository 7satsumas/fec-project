import React from 'react';
import { render, screen } from '@testing-library/react';
import Summary from './Summary';
import exampleReviewsMeta from './exampleReviewsMeta';

it('should render a summary component', () => {
  render(<Summary meta={exampleReviewsMeta} />);

  expect(screen.getByRole('button', { name: /5 stars/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /4 stars/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /3 stars/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /2 stars/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /1 stars/i })).toBeInTheDocument();
  expect(screen.getByText('4.5 average rating')).toBeInTheDocument();
});