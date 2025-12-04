import type { Meta, StoryObj } from '@storybook/react';
import PowerButton from '@/components/function/PowerButton';

const meta = {
  title: 'Components/Function/PowerButton',
  tags: ['autodocs'],
  component: PowerButton,
  args: {
    deviceId: 'd1',
    power: 'off',
  },
  argTypes: {
    power: {
      control: 'radio',
      options: ['on', 'off'],
      description: '장치의 현재 전원 상태',
    },
    deviceId: {
        control: 'text',
        description: '장치 ID (클릭 시 토글 훅에 전달됨)'
    }
  }
} satisfies Meta<typeof PowerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PowerOn: Story = {
  args: {
    power: 'on',
  },
  name: '전원 켜짐 상태',
};

export const PowerOff: Story = {
  name: '전원 꺼짐 상태',
};