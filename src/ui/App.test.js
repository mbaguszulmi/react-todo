import { render, screen } from '@testing-library/react';
import { appRender } from '../main-renderer';

test('renders learn react link', () => {
  render(appRender());
  const logo = screen.getByText(/React TODO/i);
  expect(logo).toBeInTheDocument();
});
