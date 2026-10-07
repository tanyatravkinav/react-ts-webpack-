import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { NavBar } from "./NavBar";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";


const meta = {
  title: "widgets/NavBar",
  component: NavBar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};


export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};