import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const UserScreen = ({ route, navigation }: Props ) => {

  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params!.name,
    });
  }, );

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>UserScreen</Text>
    </View>
  );
};
