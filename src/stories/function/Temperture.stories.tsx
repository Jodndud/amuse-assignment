import type { Meta, StoryObj } from '@storybook/react';
import Temperature from '@/components/function/Temperture';

const meta: Meta<typeof Temperature> = {
  title: 'Components/Function/Temperature',
  component: Temperature,
  tags: ['autodocs'],
  
  argTypes: {
    deviceId: {
      control: 'text',
      description: '제어할 기기의 고유 ID',
    },
    temperature: {
      control: { type: 'number' },
      description: '현재 표시 온도 (섭씨)',
    },
  },
  args: {
    deviceId: 'd2',
  },
};

export default meta;
type Story = StoryObj<typeof Temperature>;

export const DefaultTemperature: Story = {
  args: {
    deviceId: 'd2',
    temperature: 24,
  },
  name: '온도 표시',
  parameters: {
  }
};