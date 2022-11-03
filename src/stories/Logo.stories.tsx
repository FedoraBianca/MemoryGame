import Logo from "../components/Logo";
import { ILogo } from "../components/Logo/Logo";
import { Story } from "@storybook/react";
import Heading from "../components/Heading";
import { theme } from "../styles/Theme.style";

export default {
  title: "Logo",
  component: Logo,
};

const Template: Story<ILogo> = (args: any) => <Logo {...args} />;

export const LogoComponent = Template.bind({});
LogoComponent.args = {
  children: (
    <Heading size="L" color={theme.colors.black} children="memory"></Heading>
  ),
};
