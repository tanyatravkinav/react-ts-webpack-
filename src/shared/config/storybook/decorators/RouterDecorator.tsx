import type { StoryFn } from '@storybook/react-webpack5';

import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = ()=> (Story: StoryFn ) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);