import React from 'react';
import {Text, View, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Container, Content } from '../../../../components';
import Header from "../../components/Header";
import styles from './style';

// Imagens

import Piscina from '../../../../assets/images/piscina.jpg';
import Servicos from '../../../../assets/images/servicos.jpg';
import Playground from '../../../../assets/images/playground.jpg';
import Salao from '../../../../assets/images/salao.jpg';
import Academia from '../../../../assets/images/academia.png';

function Home(props) {
  return (
    <Container style={styles.container}>
      <Header />
      <Content>
        <View style={styles.body}>
          <TouchableWithoutFeedback>
            <View style={styles.box}>
              <Image source={Piscina} style={styles.image} />
              <Text style={styles.textForeground}>Área de lazer</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={[styles.duo]}>
            <TouchableWithoutFeedback>
              <View style={[styles.box, { marginRight: 5 }]}>
                <Image source={Playground} style={styles.image} />
                <Text style={styles.textForeground}>Playground</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={[styles.box, { marginLeft: 5 }]}>
                <Image source={Servicos} style={styles.image} />
                <Text style={styles.textForeground}>Serviços</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.box}>
              <Image source={Academia} style={styles.image} />
              <Text style={styles.textForeground}>Espaço fitness</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.box}>
              <Image source={Salao} style={styles.image} />
              <Text style={styles.textForeground}>Salão de eventos</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Content>
    </Container>
  );
}

export default Home;
