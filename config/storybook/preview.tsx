// config/storybook/preview.tsx
import type { Decorator, Preview } from '@storybook/react-webpack5';
import 'app/styles/index.scss';
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator";
import {RouterDecorator} from "shared/config/storybook/decorators/RouterDecorator";



const preview: Preview = {
  decorators: [ ThemeDecorator("light"), RouterDecorator()],
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