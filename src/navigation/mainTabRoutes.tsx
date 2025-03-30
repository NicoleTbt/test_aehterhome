import React, {FC} from 'react';
import {ImageSourcePropType} from 'react-native';

// import screens
import HomeScreen from '../screens/home/HomeScreen';
import SceneScreen from '../screens/SceneScreen';
import InsightScreen from '../screens/InsightScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';

// import tab icons
const HomeIcon = require('../assets/home.png');
const ProfileIcon = require('../assets/user.png');
const SceneIcon = require('../assets/scene.png');
const MessageIcon = require('../assets/message.png');
const InsightIcon = require('../assets/insight.png');

export const mainTabRoutes: {
  label: string;
  icon: ImageSourcePropType;
  component: FC;
  showBadge?: boolean;
}[] = [
  {label: 'Home', icon: HomeIcon, component: HomeScreen},
  {label: 'Scene', icon: SceneIcon, component: SceneScreen},
  {label: 'Insight', icon: InsightIcon, component: InsightScreen},
  {
    label: 'Message',
    icon: MessageIcon,
    component: MessageScreen,
    showBadge: true,
  },
  {label: 'Profile', icon: ProfileIcon, component: ProfileScreen},
];
