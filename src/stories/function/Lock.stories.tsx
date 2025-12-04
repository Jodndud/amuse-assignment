import type { Meta, StoryObj } from '@storybook/react';
import Lock from '@/components/function/Lock';

const meta = {
  title: 'Components/Function/Lock',
  component: Lock,
  tags: ['autodocs'],
  argTypes: {
    locked: {
      control: { type: 'boolean' },
      description: '기기의 잠금 상태를 나타냅니다.'
    }
  },
} satisfies Meta<typeof Lock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unlocked: Story = {
  args: {
    locked: false,
  },
  name: '잠금 해제 상태',
};

export const Locked: Story = {
  args: {
    locked: true,
  },
  name: '잠금 상태',
};