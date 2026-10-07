import type { Meta, StoryObj } from "@storybook/react-webpack5";
import {ThemeSwitcher} from "./ThemeSwitcher";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};



export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};