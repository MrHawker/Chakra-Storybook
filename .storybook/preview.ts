import type { Preview } from "@storybook/react";
import '../src/styles/globals.css';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { 
      values: [
        // 👇 Default values
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' },
        // 👇 Add your own
        { name: 'Chakra background', value: '#121212' },
      ],
      default: 'Chakra background',

    },
  },
};

export default preview;
