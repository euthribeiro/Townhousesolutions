import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

// Stacks

import Auth from '../pages/Auth';
import Main from '../pages/Main';

// Others
import Splashscreen from '../animations/splashscreen';
import { authActions } from '../store/ducks/Auth';
import appnames from './appnames';
import { baseRegisterName } from '../config/project';
import { cardBottom } from '../animations/animes';

const Stack = createStackNavigator();

function App(props) {

  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [end, setEnd] = useState(false);
  const getLogin = async () => {
    const login = JSON.parse(await AsyncStorage.getItem(`${baseRegisterName}/login`));

    if(login && login !== null && login !== undefined) {
      dispatch(
        authActions.getLoginSuccess(login)
      );
    }
  }

  const init = () => {
    getLogin();
    setLoaded(true);
  }

  useEffect(() => {
    init();
  }, []);

  const isLogged = useSelector(state => state.Auth.isLogged);

  if(!loaded || !end) {
    return (
      <Splashscreen end={setEnd} />
    )
  }

  return (
    <>
      <Stack.Navigator>
        {!isLogged ? (
          <Stack.Screen name={appnames.AUTH} component={Auth} options={{
            headerShown: false,
          }} />
        ) : (
          <Stack.Screen name={appnames.MAIN} component={Main} options={{
            cardStyleInterpolator: cardBottom,
            headerShown: false,
          }} />
        )}
      </Stack.Navigator>
    </>
  )
}

export default App;
