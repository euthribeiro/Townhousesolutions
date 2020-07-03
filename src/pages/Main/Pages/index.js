import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import Home from './Home';
import Invoice from './Invoice';
import Requests from './Requests';
import { defaultColors } from '../../../styles';

const BottomTab = createBottomTabNavigator();

export default function App(props) {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'Home') {
              return <Ionicons name="ios-home" size={size} color={color} />;
          } if(route.name === 'Faturas') {
            return <FontAwesome5 name='file-invoice-dollar' size={size} color={color} />;
          } if(route.name === 'Solicitações') {
            return <FontAwesome5 name="user-clock" size={size} color={color}/>;
          }
          // You can return any component that you like here!
          return null;
        },
        tabBarLabel: () => (
          <Text style={{ color: defaultColors.white, fontSize: 14, marginBottom: 5 }}>{route.name}</Text>
        ),
      })}
      tabBarOptions={{
        activeTintColor: defaultColors.white,
        inactiveTintColor: defaultColors.primary,
        activeBackgroundColor: defaultColors.primary,
        inactiveBackgroundColor: defaultColors.primaryVeryHightLight,
        style: {
          minHeight: 60,
        },
      }}
    >

      <BottomTab.Screen name="Faturas" component={Invoice} />
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Solicitações" component={Requests} />
    </BottomTab.Navigator>
  )
}
