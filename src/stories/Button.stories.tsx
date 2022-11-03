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
  btnText: "Start Game",
  onClick: () => {},
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  type: "M",
  disabled: false,
  btnText: "Numbers",
  onClick: () => {},
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  color: theme.colors.orange,
  btnText: "Restart",
  onClick: () => {},
};
