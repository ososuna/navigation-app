/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch ( route.name ) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;
            default:
              break;
          }
          return <Text style={{ color }}>{ iconName }</Text>;
        },
      })}
    >
      <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ Tab2Screen } />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </Tab.Navigator>
  );
};
