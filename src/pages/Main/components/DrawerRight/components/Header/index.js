import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { TouchableOpacity, Text } from 'react-native';
import Configuration from "../Config";
import styles, { Container } from './style';

function Header({ navigation }) {

  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <TouchableOpacity style={styles.button} onPress={() => navigation.closeDrawer()}>
        <Icon name="arrow-left" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>Notificações</Text>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <EvilIcons name="gear" style={styles.icon} />
      </TouchableOpacity>
      <Configuration show={visible} hide={setVisible} />
    </Container>
  )
}

export default Header;
