import {render, screen, fireEvent} from '@testing-library/react';
import App, {replaceCameWidth, replaceCameWidthDouble} from './App';

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

  test('initial conditions', () => {
    render(<App/>)
    // check that the sutton start out enabled
    const colorButton = screen.getByRole('button', {name: 'Change to blue'})
    expect(colorButton).toBeEnabled()
    //check that the checkbox start out checked
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

  })

describe('space before cc cap. letters', () => {
  test('Work for inner letters', () => {
    expect(replaceCameWidth('Red')).toBe('Red')
  })
  test('Work one inner letters', () => {
    expect(replaceCameWidth('Blue')).toBe('Blue')
  })
  test('Double', ()=>{
    expect(replaceCameWidthDouble('Ex')).toBe('Ex')
  })
})
