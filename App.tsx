import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { SideMenu } from './src/navigator/SideMenu';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <SideMenu />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: { children: JSX.Element }) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  );
};

export default App;
