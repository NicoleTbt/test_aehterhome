import {StyleSheet} from 'react-native';

export const tabNavigationStyles = StyleSheet.create({
  tabBarStyle: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    height: 50,
    borderTopWidth: 0,
    elevation: 10,
    shadowOpacity: 0.1,
  },
  tabBarLabelStyle: {
    fontSize: 10,
  },
  tabIcon: {
    width: 27,
    height: 27,
  },
  iconModification: {
    marginRight: 5,
  },
  tabBarBadgeStyle: {
    position: 'absolute',
    right: 0,
    width: 7,
    height: 7,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});
