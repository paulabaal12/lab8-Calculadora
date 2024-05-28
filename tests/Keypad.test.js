import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Keypad from '@/components/Keypad';

describe('Keypad', () => {
  it('should call the onButtonClick function when a button is clicked', () => {
    const onButtonClick = jest.fn();
    const setActiveButton = jest.fn();
    const activeButton = '6';

    const { getByText } = render(
      <Keypad
        onButtonClick={onButtonClick}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
    );

    const button = getByText('6');
    fireEvent.click(button);

    expect(onButtonClick).toHaveBeenCalledWith('6');
  });
});
