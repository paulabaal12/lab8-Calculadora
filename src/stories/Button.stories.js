import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const NumberButton = () => (
  <Button label="7" onClick={action('Number button clicked')} />
);

export const OperationButton = () => (
  <Button label="+" onClick={action('Operation button clicked')} />
);

export const OtherButton = () => (
  <Button label="C" onClick={action('Other button clicked')} />
);
