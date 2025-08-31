import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { Label } from './label';
import { Button } from './button';

const meta = {
  title: 'ui/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'url', 'tel', 'file'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
        placeholder: 'Cannot type here',
    },
};

export const WithLabel: Story = {
    render: (args) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input {...args} type="email" id="email" placeholder="Email" />
        </div>
    ),
};

export const WithButton: Story = {
    render: (args) => (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input {...args} type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
        </div>
    ),
};

export const FileInput: Story = {
    args: {
        type: 'file',
    },
};

export const PasswordInput: Story = {
    args: {
        type: 'password',
        placeholder: 'Enter password',
    },
};
