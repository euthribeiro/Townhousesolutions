import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Others

import appnames from './appnames';
import { cardRight } from '../../animations/animes';

// Pages

import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator();

export default function Auth(props) {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={appnames.LOGIN} component={Login} />
      <Stack.Screen name={appnames.REGISTER} component={Register} options={{
        cardStyleInterpolator: cardRight,
      }} />
    </Stack.Navigator>
  )
}
