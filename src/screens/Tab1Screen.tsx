import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1 Screen effect');
  }, []);

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Tab1Screen</Text>
    </View>
  );
};
