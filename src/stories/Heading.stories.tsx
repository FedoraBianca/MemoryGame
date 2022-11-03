import Heading from "../components/Heading";
import { IHeading } from "../components/Heading/Heading";
import { Story } from '@storybook/react';

export default {
  title: 'Heading',
  component: Heading,
}

const Template: Story<IHeading> = (args: any) => <Heading {...args} />;

export const SmallHeading = Template.bind({});
SmallHeading.args = {
  size: 'S',
  children: 'This is a text'
};


export const MediumHeading = Template.bind({});
MediumHeading.args = {
  size: 'M',
  children: 'This is a text'
};

export const LargeHeading = Template.bind({});
LargeHeading.args = {
  size: 'L',
  children: 'This is a text'
};