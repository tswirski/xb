import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'UI/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const _Default: Story = {
  args: {
    children: 'Click me',
  },
};

export const _Red: Story = {
  args: {
    children: 'Click me',
    bgColor: 'alizarin',
    color: 'clouds',
  },
};

export const _Green: Story = {
  args: {
    children: 'Click me',
    bgColor: 'turquoise',
    color: 'clouds',
  },
};

export const _Blue: Story = {
  args: {
    children: 'Click me',
    bgColor: 'peterRiver',
    color: 'clouds',
  },
};
