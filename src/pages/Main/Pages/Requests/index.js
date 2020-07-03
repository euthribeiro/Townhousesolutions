import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Content, Body } from '../../../../components';
import Header from "../../components/Header";
import styles, { Fab } from './style';
import { defaultColors } from '../../../../styles';

function Requests(props) {
  return (
    <Container>
      <Header />
      <Container>
        <Content>
          <Body>
            <Text style={styles.title}>Minhas solicitações</Text>
            <View style={styles.item}>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>Inclusão de alcool em gel</Text>
                <Text style={styles.itemDescription}>Descrição: solicito que seja colocado alcool em gel na portaria</Text>
                <Text style={styles.itemStatus}>Status: Em análise</Text>
              </View>
              <View>
                <Icon name="chevron-right" size={25} color={defaultColors.primary} style={{ marginHorizontal: 10 }} />
              </View>
            </View>
          </Body>
        </Content>
        <Fab>
          <Icon name="plus" size={32} color={defaultColors.white} />
        </Fab>
      </Container>
    </Container>
  );
}

export default Requests;
