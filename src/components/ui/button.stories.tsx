import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Button } from './button';
import { PlusCircle } from 'lucide-react';
import React from 'react';

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
        table: {
            disable: true,
        }
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
};

export const Variants: Story = {
    render: (args) => (
        <div className="flex flex-wrap gap-4">
            <Button {...args} variant="default">Default</Button>
            <Button {...args} variant="destructive">Destructive</Button>
            <Button {...args} variant="outline">Outline</Button>
            <Button {...args} variant="secondary">Secondary</Button>
            <Button {...args} variant="ghost">Ghost</Button>
            <Button {...args} variant="link">Link</Button>
        </div>
    )
}

export const Sizes: Story = {
    render: (args) => (
        <div className="flex items-center gap-4">
            <Button {...args} size="lg">Large</Button>
            <Button {...args} size="default">Default</Button>
            <Button {...args} size="sm">Small</Button>
            <Button {...args} size="icon"><PlusCircle /></Button>
        </div>
    )
}

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <PlusCircle />
                <span>Login</span>
            </>
        ),
    },
};

export const Disabled: Story = {
    args: {
        ...Primary.args,
        disabled: true,
        children: 'Disabled'
    },
};
