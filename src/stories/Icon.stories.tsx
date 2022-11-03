import React from 'react';
import { Story } from '@storybook/react';

import Icon from '../components/Icon'
import { IIcon } from '../components/Icon/Icon';

export default {
  title: 'Icon',
  component: Icon,
}

const Template: Story<IIcon> = (args: any) => <Icon {...args} />

export const CameraIcon = Template.bind({});
CameraIcon.args = {
  icon: 'camera',
  size: '60px',
  color: '#111517',
};

export const HeadphonesIcon = Template.bind({});
HeadphonesIcon.args = {
  icon: 'headphones',
  size: '60px',
  color: '#111517',
};

export const MusicIcon = Template.bind({});
MusicIcon.args = {
  icon: 'music',
  size: '60px',
  color: '#111517',
};

export const PacmanIcon = Template.bind({});
PacmanIcon.args = {
  icon: 'pacman',
  size: '60px',
  color: '#111517',
};

export const SpadesIcon = Template.bind({});
SpadesIcon.args = {
  icon: 'spades',
  size: '60px',
  color: '#111517',
};

export const ClubsIcon = Template.bind({});
ClubsIcon.args = {
  icon: 'clubs',
  size: '60px',
  color: '#111517',
};

export const BinocularsIcon = Template.bind({});
BinocularsIcon.args = {
  icon: 'binoculars',
  size: '60px',
  color: '#111517',
};

export const LockIcon = Template.bind({});
LockIcon.args = {
  icon: 'lock',
  size: '60px',
  color: '#111517',
};

export const BugIcon = Template.bind({});
BugIcon.args = {
  icon: 'bug',
  size: '60px',
  color: '#111517',
};

export const TrophyIcon = Template.bind({});
TrophyIcon.args = {
  icon: 'trophy',
  size: '60px',
  color: '#111517',
};

export const GiftIcon = Template.bind({});
GiftIcon.args = {
  icon: 'gift',
  size: '60px',
  color: '#111517',
};

export const MugIcon = Template.bind({});
MugIcon.args = {
  icon: 'mug',
  size: '60px',
  color: '#111517',
};

export const AirplaneIcon = Template.bind({});
AirplaneIcon.args = {
  icon: 'airplane',
  size: '60px',
  color: '#111517',
};

export const PowerIcon = Template.bind({});
PowerIcon.args = {
  icon: 'power',
  size: '60px',
  color: '#111517',
};

export const AattachmentIcon = Template.bind({});
AattachmentIcon.args = {
  icon: 'attachment',
  size: '60px',
  color: '#111517',
};

export const SunIcon = Template.bind({});
SunIcon.args = {
  icon: 'sun',
  size: '60px',
  color: '#111517',
};

export const StarIcon = Template.bind({});
StarIcon.args = {
  icon: 'star-full',
  size: '60px',
  color: '#111517',
};

export const HeartIcon = Template.bind({});
HeartIcon.args = {
  icon: 'heart',
  size: '60px',
  color: '#111517',
};