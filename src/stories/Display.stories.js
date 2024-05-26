import React from 'react';
import Display from '../components/Display';

export default {
  title: 'Display',
  component: Display,
};

export const DisplayWithValue = () => (
  <Display value="123" />
);

export const EmptyDisplay = () => (
  <Display value="" />
);
