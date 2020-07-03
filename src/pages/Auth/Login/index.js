import React, { useState, useEffect, useRef } from 'react';
import { Animated, Keyboard, Text } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/ducks/Auth';
import { Input, ButtonLoad, Container, Content } from '../../../components';
import styles from './style';
import Logo from '../../../assets/images/logo.png';


function Login(props) {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const initialAnimation = useRef(new Animated.Value(0)).current;
  const imageAnimated = useRef(new Animated.Value(0)).current;

  // input refs

  const secondTextInput = useRef(null);

  useEffect(() => {
    Animated.spring(initialAnimation, {
      toValue: 1,
      bounciness: 20,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const animeImage = v => {
    Animated.spring(imageAnimated, {
      toValue: v,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const keyListener = Keyboard.addListener('keyboardDidShow', () => {
      animeImage(1);
    });

    return () => {
      keyListener.remove();
    };
  }, []);

  useEffect(() => {
    const hideKey = Keyboard.addListener('keyboardDidHide', () => {
      animeImage(0);
    });

    return () => {
      hideKey.remove();
    };
  }, []);

  const doLogin = () => {
    dispatch(
      authActions.getLoginSuccess({ name: 'Teste' })
    );
  }

  return (
    <Container>
      <Content>
        <Animated.View
          style={[
            styles.content,
            {
              transform: [
                {
                  translateY: initialAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [200, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Animated.Image
            source={Logo}
            style={[
              styles.logo,
              {
                height: imageAnimated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [150, 100],
                }),
                width: imageAnimated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [300, 200],
                }),
              },
            ]}
          />
          <Input
            placeholder="Login"
            icon={
              <Fontisto name="email" style={styles.icon} />
            }
            value={email}
            onChangeText={setEmail}
            containerStyle={styles.containerInputStyle}
            style={styles.input}
            onSubmitEditing={() => secondTextInput.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"
          />
          <Input
            placeholder="Senha"
            icon={
              <Fontisto name="locked" style={styles.icon} />
            }
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            blurOnSubmit
            onSubmitEditing={doLogin}
            ref={secondTextInput}
            returnKeyType="send"
          />
          <ButtonLoad
            load={loading}
            title="Entrar"
            titleStyle={styles.titleStyle}
            buttonStyle={styles.buttonStyle}
            onPress={doLogin}
          />
          <Text style={styles.smallText}>Ainda não é cadastrado?</Text>
          <ButtonLoad
            load={loading}
            title="Cadastre-se"
            titleStyle={styles.titleStyle}
            buttonStyle={styles.buttonRegStyle}
            onPress={() => props.navigation.push('Register')}
          />
        </Animated.View>
      </Content>
    </Container>
  );
}

export default Login;
