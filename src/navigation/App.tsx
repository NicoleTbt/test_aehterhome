import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigation from './MainTabNavigation';
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const safePadding = '5%';

  return (
    <View style={styles.app}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <MainTabNavigation />
      </NavigationContainer>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
