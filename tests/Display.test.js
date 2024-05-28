import React from 'react';
import { render } from '@testing-library/react';
import Display from '@/components/Display'; 

describe('Display Component', () => {
  it('renders correctly with the appropriate class', () => {
    const value = '1655'; 
    const { getByTestId } = render(<Display value={value} />);

    const displayElement = getByTestId('display');
    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveClass('display'); 
  });

  it('displays the correct value', () => {
    const value = '120104'; 
    const { getByTestId } = render(<Display value={value} />);

    const displayElement = getByTestId('display');
    expect(displayElement.textContent).toBe(value); 
  });
});
