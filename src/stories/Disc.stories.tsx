import Disc, { IDisc } from "../components/Disc/Disc";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme.style";
import { Story } from "@storybook/react";

export default {
  title: "Disc",
  component: Disc,
};

const Template: Story<IDisc> = (args: any) => (
  <ThemeProvider theme={theme}>
    <Disc {...args} />
  </ThemeProvider>
);

export const DiscUnflipped = Template.bind({});
DiscUnflipped.args = {
  type: "number",
  onClick: () => {},
  flipped: false,
  matched: false,
};

export const DiscFlipped = Template.bind({});
DiscFlipped.args = {
  type: "number",
  onClick: () => {},
  flipped: true,
  matched: false,
};

export const DiscMatched = Template.bind({});
DiscMatched.args = {
  type: "number",
  onClick: () => {},
  flipped: true,
  matched: true,
};
