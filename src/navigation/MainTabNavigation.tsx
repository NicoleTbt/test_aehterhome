import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {mainTabRoutes} from './mainTabRoutes';
import {tabNavigationStyles} from './tabNavigationStyles';

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabNavigationStyles.tabBarStyle,
        tabBarLabelStyle: tabNavigationStyles.tabBarLabelStyle,
        tabBarInactiveTintColor: 'grey',
      }}>
      {mainTabRoutes.map(route => (
        <Tab.Screen
          key={route.label}
          name={route.label}
          component={route.component}
          options={{
            title: route.label,
            tabBarIcon: () => (
              <View>
                <Image
                  source={route.icon}
                  style={[
                    tabNavigationStyles.tabIcon,
                    route.showBadge ? tabNavigationStyles.iconModification : '',
                  ]}
                />
                {route.showBadge && (
                  <View style={tabNavigationStyles.tabBarBadgeStyle} />
                )}
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
