import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import { defaultColors } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={defaultColors.primaryLight} />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
