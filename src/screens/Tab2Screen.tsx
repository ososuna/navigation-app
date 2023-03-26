import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const Tab2Screen = () => {

  const { signIn, authState: { isLoggedIn } } = useContext(AuthContext);

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Tab2Screen</Text>
      {
        (isLoggedIn)
          ? <Text>You are authenticated</Text>
          : <Button title="Sign in" onPress={ signIn }/>
      }
    </View>
  );
};
