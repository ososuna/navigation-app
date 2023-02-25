import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const Page3Screen = ({ navigation }: Props) => {
  return (
    <View style={ styles.globalMargin }>
      <Text>Page3Screen</Text>
      <Button
        title="Get back"
        onPress={ () => navigation.pop() }
      />
      <Button
        title="Go home"
        onPress={ () => navigation.popToTop() }
      />
    </View>
  );
};
