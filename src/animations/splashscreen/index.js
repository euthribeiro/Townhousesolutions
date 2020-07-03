import React, { useRef, useEffect } from 'react';
import { Animated, View } from 'react-native';

import styles from './style';
import Logo from '../../assets/images/logo.png';

function Splash(props) {
  const { end } = props;
  const animation = useRef(new Animated.Value(0)).current;

  const anime = () => {
    Animated.timing(
      animation,
      {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }
    ).start(() => end(true));
  }

  useEffect(() => {
    anime();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image source={Logo} style={[
        styles.logo,
        {
          transform: [
            {
              scale: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              })
            }
          ]
        }
      ]} />
    </View>
  );
}

export default Splash;
