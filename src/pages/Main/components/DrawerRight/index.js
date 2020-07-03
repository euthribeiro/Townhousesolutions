import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContext } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
// Others

import { View, Text } from 'react-native';
import { defaultColors } from '../../../../styles';
import styles from './style';
import NotificationJSON from '../../../../assets/json/notification.json';

// Pages

import Pages from '../../Pages';

import appnames from './appnames';

// Header

import Header from './components/Header';


const Drawer = createDrawerNavigator();

function CustomDrawerContent({ progress, navigation, ...rest }) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <Animated.View>
      <View style={{height: '100%'}}>
        <Header navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.lottieView}>
            <LottieView source={NotificationJSON} autoPlay loop />
          </View>
          <Text style={styles.notificationText}>Está tudo tranquilo por aqui :)</Text>
        </View>
      </View>
    </Animated.View>
  );
}


export default function Auth(props) {

  return (
    <Drawer.Navigator drawerType='slide' drawerPosition="right" drawerContent={({prop, navigation}) => <CustomDrawerContent {...prop} navigation={navigation} />} overlayColor="#0000" drawerStyle={{
      width: '100%',
      backgroundColor: defaultColors.primary
    }}>
      <Drawer.Screen name="Main" component={Pages} />
    </Drawer.Navigator>
  )
}
