import React, { useContext } from 'react';
import { NavigationContext, DrawerActions } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { Container } from './style';

function Header(props) {

  const navigation = useContext(NavigationContext);

  return (
    <Container>
      <TouchableOpacity style={styles.button} onPress={() => navigation.dangerouslyGetParent().dangerouslyGetParent().dispatch(DrawerActions.toggleDrawer())}>
        <Icon name="account-circle-outline" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>Olá, Thiago</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Icon name="bell-ring" style={styles.icon} />
      </TouchableOpacity>
    </Container>
  );
}

export default Header;
