import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../src/components/Calculator';

describe('Calculator', () => {
  test('renders calculator with initial display value of 0', () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId('display');
    expect(display.textContent).toBe('0');
  });

  test('updates display when a number button is clicked', () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId('display');
    fireEvent.click(getByTestId('button-7'));
    expect(display.textContent).toBe('7');
  });

  test('performs addition operation correctly', () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId('display');
    fireEvent.click(getByTestId('button-5'));
    fireEvent.click(getByTestId('button-+'));
    fireEvent.click(getByTestId('button-3'));
    fireEvent.click(getByTestId('button-='));
    expect(display.textContent).toBe('8');
  });

 

  test('shows ERROR for overflow', () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId('display');
    fireEvent.click(getByTestId('button-9'));
    fireEvent.click(getByTestId('button-9'));
    fireEvent.click(getByTestId('button-9'));
    fireEvent.click(getByTestId('button-9'));
    fireEvent.click(getByTestId('button-9'));
    fireEvent.click(getByTestId('button-9'));
    fireEvent.click(getByTestId('button-9'));
    fireEvent.click(getByTestId('button-9'));
    fireEvent.click(getByTestId('button-9'));
    fireEvent.click(getByTestId('button-+'));
    fireEvent.click(getByTestId('button-1'));
    fireEvent.click(getByTestId('button-='));
    expect(display.textContent).toBe('ERROR');
  });

  
  test('shows "ERROR" for division by zero', () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId('display');
    fireEvent.click(getByTestId('button-9'));
    fireEvent.click(getByTestId('button-/'));
    fireEvent.click(getByTestId('button-0'));
    fireEvent.click(getByTestId('button-='));
    expect(display.textContent).toBe('ERROR');
  });

  test('clears display when "C" button is clicked', () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId('display');
    fireEvent.click(getByTestId('button-7'));
    fireEvent.click(getByTestId('button-C'));
    expect(display.textContent).toBe('0');
  });


});