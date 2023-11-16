import {render, fireEvent, screen} from '@testing-library/react'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const countMessage = screen.getByText("Counter");
  expect(countMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId("count").textContent;
  expect(count).toBe("0")
});

test('clicking + increments the count', () => {
  const count = screen.getByTestId("count");
  const increment = screen.getByText("+");

  fireEvent.click(increment);

  expect(count.textContent).toBe("1");
  
});

test('clicking - decrements the count', () => {
  const count = screen.getByTestId("count");
  const decrement = screen.getByText("-");

  fireEvent.click(decrement);

  expect(count.textContent).toBe("-1");
});
