/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Image, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {

  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={ (props) => <Menu {...props} /> }
    >
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
    </Drawer.Navigator>
  );
};

const Menu = ( _props: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={{
            uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          }}
          style={ styles.avatar }
        />
      </View>
    </DrawerContentScrollView>
  );
};
