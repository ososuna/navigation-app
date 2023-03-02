import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BasicSideMenu } from './src/navigator/BasicSideMenu';

const App = () => {
  return (
    <NavigationContainer>
      <BasicSideMenu />
    </NavigationContainer>
  );
};

export default App;
