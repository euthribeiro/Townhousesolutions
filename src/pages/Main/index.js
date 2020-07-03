import React, { useContext } from 'react';
import { DrawerActions, NavigationContext } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
// Others

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/ducks/Auth';
import appnames from './appnames';
import { defaultColors } from '../../styles';
import styles from './drawerstyle';

// Pages

// import Home from './Home';
// import Invoice from './Invoice';

import DrawerRight from './components/DrawerRight';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {

  const dispatch = useDispatch();
  const navigation = useContext(NavigationContext);

  const doLogout = () => {
    dispatch(
      authActions.doLogout()
    );
  }

  return (
    <Animated.View>
      <View>
        <View style={{ marginTop: 20 }}>
          <View style={[styles.row, styles.viewProfile]}>
            <Image style={styles.profile} source={require('../../assets/images/profile.jpg')} />
            <TouchableOpacity style={styles.close} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Feather name="arrow-right" style={[styles.icon]} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerData}>
            <Text style={styles.name}>Oi, Thiago</Text>
            <Text style={styles.email}>thiago_santos14@hotmail.com</Text>
          </View>
          <DrawerItem
            label={() => <Text style={styles.label}>Seus dados</Text>}
            icon={() => <Icon name="account" style={[styles.icon]} />}
            style={styles.item}
          />
          <DrawerItem
            label={() => <Text style={styles.label}>Ajuda</Text>}
            icon={() => <Icon name="comment-processing-outline" style={[styles.icon]} />}
            style={styles.item}
          />
          <DrawerItem
            label={() => <Text style={styles.label}>Termos e condições</Text>}
            icon={() => <Icon name="file" style={[styles.icon]} />}
            style={styles.item}
          />
          <DrawerItem
            label={() => <Text style={styles.label}>Sair desta conta</Text>}
            icon={() => <AntDesign name="poweroff" style={[styles.icon]} />}
            onPress={() => doLogout()}
            style={styles.item}
          />
          <Text style={styles.version}>Versão do app 1.0.0</Text>
        </View>
      </View>
    </Animated.View>
  );
}


export default function Auth({ navigation }) {

  return (
    <Drawer.Navigator drawerPosition="left" drawerContent={(prop) => <CustomDrawerContent {...prop} navigation={navigation} />} drawerType='slide' overlayColor="#0000" drawerStyle={{
      width: '100%',
      backgroundColor: defaultColors.primary
    }}>
      <Drawer.Screen name={appnames.HOME} component={DrawerRight} />
    </Drawer.Navigator>
  )
}
