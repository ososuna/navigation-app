import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';

export const Page2Screen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hello world',
      headerBackTitle: 'Back',
    });
  }, );

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Page2Screen</Text>
      <Button
        title="Go to page 3"
        onPress={ () => navigator.navigate('Page3Screen') }
      />
    </View>
  );
};
