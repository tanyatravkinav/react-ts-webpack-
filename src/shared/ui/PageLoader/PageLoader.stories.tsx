import type { Meta, StoryObj } from "@storybook/react-webpack5";
import PageLoader from "./PageLoader";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/PageLoader",
  component: PageLoader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof PageLoader>;

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