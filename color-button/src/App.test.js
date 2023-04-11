import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>)
  // find an element with role of button text
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  //expect the background color to be red

  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
  //click btn
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
//expect the tn to be 'change to red
  expect(colorButton.textContent).toBe('Change to red')
})

