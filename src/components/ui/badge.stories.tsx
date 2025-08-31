import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import React from 'react';

const meta = {
  title: 'ui/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const AllVariants: Story = {
    name: 'All Variants',
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    )
}
