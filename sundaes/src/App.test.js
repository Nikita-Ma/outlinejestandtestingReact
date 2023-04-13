import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import FormCheckInput from "react-bootstrap/FormCheckInput";

test('check input on checked', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
  fireEvent.click(checkbox)
  expect(checkbox).toBeEnabled()
})
