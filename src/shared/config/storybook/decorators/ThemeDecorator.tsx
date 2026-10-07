import type { Decorator, Preview, StoryFn } from '@storybook/react-webpack5';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme)=> (Story: StoryFn ) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);