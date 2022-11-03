import { Story } from "@storybook/react";
import Button, { IButton } from "../components/Button/Button";
import { theme } from "../styles/Theme.style";
import { ThemeProvider } from "styled-components";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<IButton> = (args: any) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const LargeButton = Template.bind({});
LargeButton.args = {
  type: "L",
  children: "Start Game",
  onClick: () => {},
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  type: "M",
  children: "Numbers",
  disabled: false,
  onClick: () => {},
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: "New Game",
  onClick: () => {},
};
