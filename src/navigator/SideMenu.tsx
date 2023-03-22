/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={ (props) => <Menu {...props} /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
};

const Menu = ({ navigation }: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={{
            uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
          }}
          style={ styles.avatar }
        />
      </View>
      <View style={ styles.menuContainer }>
        <TouchableOpacity
          style={ styles.menuBtn }
          onPress={ () => navigation.navigate('Tabs') }
        >
          <Text style={ styles.menuText }>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.menuBtn }
          onPress={ () => navigation.navigate('SettingsScreen') }
        >
          <Text style={ styles.menuText }>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
