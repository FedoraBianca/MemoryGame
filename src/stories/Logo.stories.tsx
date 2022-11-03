import { Story } from "@storybook/react";
import { theme } from "../styles/Theme.style";
import { ThemeProvider } from "styled-components";
import Logo from "../components/Logo/Logo";

export default {
  title: "Logo",
  component: Logo,
};

const Template: Story = (args: any) => (
  <ThemeProvider theme={theme}>
    <Logo {...args} />
  </ThemeProvider>
);

export const LogoComponent = Template.bind({});
