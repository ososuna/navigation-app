/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const Page1Screen = ({ navigation }: Props) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Page1Screen</Text>
      <Button
        title="Go to page 2"
        onPress={ () => navigation.navigate('Page2Screen') }
      />
      <Text
        style={{ marginVertical: 20, fontSize: 20 }}
      >
        Navigate with arguments</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.bigButton }}
          onPress={ () => navigation.navigate('UserScreen', {
            id: 1,
            name: 'Adam',
          }) }
        >
          <Text style={ styles.bigButtonText }>Adam</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.bigButton }}
          onPress={ () => navigation.navigate('UserScreen', {
            id: 2,
            name: 'Matty',
          }) }
        >
          <Text style={ styles.bigButtonText }>Matty</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
