import type { Meta, StoryObj } from "@storybook/react-webpack5";
import {AppLink, AppLinkTheme} from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/"
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

    theme: AppLinkTheme.PRIMARY,
    children: "Link"
  },
};

export const Secondary: Story = {
  args: {

    theme: AppLinkTheme.SECONDARY,
       children: "Link"
  },
};

export const Red: Story = {
  args: {

    theme: AppLinkTheme.RED,
       children: "Link"
  },
};



export const DarkPrimary: Story = {
  args: {
     theme: AppLinkTheme.PRIMARY,
    children: "Link"
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};