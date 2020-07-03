import React, { useState } from 'react';
import { Modal, View, Switch, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { defaultColors } from '../../../../../../styles';
import styles, { Container, Content } from './style';

function Configuration({ show, hide }) {

  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);

  return (
    <Modal visible={show} animationType="slide">
      <Container>
        <TouchableOpacity onPress={() => hide(!true)} style={styles.closeBtn}>
          <Icon name="close" size={45} color={defaultColors.primary} />
        </TouchableOpacity>
        <Content>
          <View style={styles.notificationController}>
            <Switch
              trackColor={{ false: defaultColors.dark, true: defaultColors.primary }}
              thumbColor={enabled ? defaultColors.primaryVeryHightDarken : "#f4f3f4"}
              ios_backgroundColor={defaultColors.dark}
              onValueChange={setEnabled}
              value={enabled}
              style={styles.switch}
            />
            <Text style={styles.textNotification}>Receber notificações de ofertas</Text>
          </View>
          <View style={styles.notificationController}>
            <Switch
              trackColor={{ false: defaultColors.dark, true: defaultColors.primary }}
              thumbColor={enabled2 ? defaultColors.primaryVeryHightDarken : "#f4f3f4"}
              ios_backgroundColor={defaultColors.dark}
              onValueChange={setEnabled2}
              value={enabled2}
              style={styles.switch}
            />
            <Text style={styles.textNotification}>Receber notificações sobre atualizações</Text>
          </View>
        </Content>
      </Container>
    </Modal>
  );
}

export default Configuration;
