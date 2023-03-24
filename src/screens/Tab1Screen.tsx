import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1 Screen effect');
  }, []);

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Icons</Text>
        <Text>
          <Icon name="airplane-outline" size={80} color={ colors.primary } />
        </Text>
    </View>
  );
};
