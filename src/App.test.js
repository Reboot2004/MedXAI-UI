import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MedXAI-UI title', () => {
  render(<App />);
  const titleElement = screen.getByText(/MedXAI-UI/i);
  expect(titleElement).toBeInTheDocument();
});
