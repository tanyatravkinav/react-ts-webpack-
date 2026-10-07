import type { Meta, StoryObj } from "@storybook/react-webpack5";
import PageError from "./PageError";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";


const meta = {
  title: "widgets/PageError",
  component: PageError,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof PageError>;

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