import type { Meta, StoryObj } from '@storybook/react';
import { HelpDialog } from './HelpDialog';
import { Button } from './ui/button';
import { useState } from 'react';

const meta: Meta<typeof HelpDialog> = {
  title: 'Components/HelpDialog',
  component: HelpDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story to render the component in a controlled way
const ControlledHelpDialog = (args: Story['args']) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Ajuda</Button>
      <HelpDialog
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
      />
    </>
  );
};

export const Default: Story = {
  args: {
    title: 'Título da Ajuda Padrão',
    children: 'Este é o conteúdo da ajuda que pode ser passado para o componente.',
  },
  render: ControlledHelpDialog,
};

export const WithComplexContent: Story = {
    args: {
      title: 'Ajuda com Conteúdo Complexo',
      children: (
        <div className="grid gap-4 py-4">
          <div className="flex items-start gap-4">
            <div>
              <h3 className="font-semibold">Seção 1</h3>
              <p className="text-sm text-muted-foreground">
                Descrição detalhada da primeira funcionalidade.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div>
              <h3 className="font-semibold">Seção 2</h3>
              <p className="text-sm text-muted-foreground">
                Explicação sobre outra parte do sistema.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    render: ControlledHelpDialog,
};