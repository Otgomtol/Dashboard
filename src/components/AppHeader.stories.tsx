import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import AppHeader from './AppHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

const meta = {
  title: 'components/AppHeader',
  component: AppHeader,
  decorators: [
    (Story) => <Router><Story /></Router>,
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    toggleTheme: fn(),
    setHelpContent: fn(),
    setSearchResults: fn(),
    setSearchQuery: fn(),
    setIsSearchMode: fn(),
    searchQuery: '',
  },
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  name: 'Light Mode (Current State)',
  args: {
    isDarkMode: false,
  },
};

export const DarkMode: Story = {
  name: 'Dark Mode (Current State)',
  args: {
    isDarkMode: true,
  },
};
