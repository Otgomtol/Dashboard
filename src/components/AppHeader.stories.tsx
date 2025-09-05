import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import AppHeader from './AppHeader';

const meta: Meta<typeof AppHeader> = {
  title: 'Components/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  // Add a decorator to wrap the story in a MemoryRouter
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  // Use simple arrow functions for mocks to remove dependencies
  args: {
    toggleTheme: () => {},
    setHelpContent: () => {},
    setSearchResults: () => {},
    setSearchQuery: () => {},
    setIsSearchMode: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

// Base story with all required props
export const Default: Story = {
  args: {
    isDarkMode: false,
    searchQuery: '',
    hasNotification: false,
  },
};

// Story for the notification state
export const WithNotification: Story = {
  args: {
    ...Default.args, // Inherit default args
    hasNotification: true,
  },
};

// Story for when the user is typing in the search bar
export const Searching: Story = {
  args: {
    ...Default.args,
    searchQuery: 'React',
  },
};
