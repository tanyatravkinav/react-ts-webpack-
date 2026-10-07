import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AboutPage from "./AboutPage";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "pages/AboutPage",
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof AboutPage>;

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