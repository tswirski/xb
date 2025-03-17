import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'UI/Molecules/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Input field',
  },
};

export const WithEmail: Story = {
  args: {
    label: 'E-mail',
    type: 'email',
  },
};

export const WithPassword: Story = {
  args: {
    label: 'Password',
    type: 'password',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    type: 'text',
    disabled: true,
  },
};
