import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { SideBar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/SideBar",
  component: SideBar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof SideBar>;

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