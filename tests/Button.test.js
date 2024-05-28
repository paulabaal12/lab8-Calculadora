
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '@/components/Button'; 

describe('Button Component', () => {
  it('renders correctly with appropriate classes', () => {
    const { getByTestId } = render(
      <Button label="7" onClick={() => {}} isActive={false} setActiveButton={() => {}} />
    );

    const buttonElement = getByTestId('button-7');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('numberButton'); 
  });

  it('triggers onClick event when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <Button label="C" onClick={mockOnClick} isActive={false} setActiveButton={() => {}} />
    );

    const buttonElement = getByTestId('button-C');
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1); 
  });

  it('activates onMouseDown event', () => {
    const mockSetActiveButton = jest.fn();
    const { getByTestId } = render(
      <Button label="=" onClick={() => {}} isActive={false} setActiveButton={mockSetActiveButton} />
    );

    const buttonElement = getByTestId('button-=');
    fireEvent.mouseDown(buttonElement);
    expect(mockSetActiveButton).toHaveBeenCalledWith(null); 
  });
});
