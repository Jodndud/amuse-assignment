import type { Preview } from '@storybook/react-vite'
import { RecoilRoot } from 'recoil';

const preview: Preview = {
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story /> 
      </RecoilRoot>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;