import React from 'react';
import { action } from '@storybook/addon-actions';
import Keypad from '../components/Keypad';

export default {
  title: 'Keypad',
  component: Keypad,
};

export const BasicKeypad = () => (
  <Keypad
    onButtonClick={action('Button clicked')}
    activeButton={null}
    setActiveButton={() => {}}
  />
);
