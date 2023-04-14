import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import FormCheckInput from "react-bootstrap/FormCheckInput";
import userEvent from "@testing-library/user-event";

test('check input on checked', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
  fireEvent.click(checkbox)
  expect(checkbox).toBeEnabled()
})

//mock test

test('update scoop', async () => {
  render(<Options optionType="scoops"/>)

  const scSubtiotal = screen.getByText('Scoops tototal: $')
  expect(scSubtiotal).toHaveTextContent('0,00')

  const vanillaInput = await screen.findAllByRole('spinbutton', {
    name: 'Vanilla'
  })
  userEvent.clear(vanillaInput)
})