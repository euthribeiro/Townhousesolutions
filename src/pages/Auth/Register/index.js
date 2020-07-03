import React, { useState, useRef } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { View, Text, Image } from 'react-native';

import Logo from '../../../assets/images/logo.png';
import { Input, ButtonLoad, Container, Content } from '../../../components';
import styles from './style';

function Register(props) {

  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [registerKey, setRegisterKey] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [loading, setLoading] = useState(false);

  // input refs

  const secondTextInput = useRef(null);
  const thirdTextInput = useRef(null);
  const fourthTextInput = useRef(null);
  const fifthTextInput = useRef(null);
  const sixthTextInput = useRef(null);
  const seventhTextInput = useRef(null);
  const eighthTextInput = useRef(null);

  const doRegister = () => {

  }

  return (
    <Container>
      <Content>
        <View style={styles.content}>
          <Image source={Logo} style={styles.logo} />
          <Input
            containerStyle={styles.containerInputStyle}
            icon={<MaterialCommunityIcons name="account" style={styles.icon} />}
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
            style={styles.input}
            blurOnSubmit={false}
            onSubmitEditing={() => secondTextInput.current.focus()}
            returnKeyType="next"
          />
          <Input
            containerStyle={styles.containerInputStyle}
            icon={<Entypo name="documents" style={styles.icon} />}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCPF}
            style={styles.input}
            ref={secondTextInput}
            blurOnSubmit={false}
            onSubmitEditing={() => thirdTextInput.current.focus()}
            returnKeyType="next"
          />
          <Input
            containerStyle={styles.containerInputStyle}
            icon={<Entypo name="key" style={styles.icon} />}
            placeholder="Chave de registro"
            value={registerKey}
            onChangeText={setRegisterKey}
            style={styles.input}
            ref={thirdTextInput}
            blurOnSubmit={false}
            onSubmitEditing={() => fourthTextInput.current.focus()}
            returnKeyType="next"
          />
          <Input
            containerStyle={styles.containerInputStyle}
            icon={<MaterialCommunityIcons name="cellphone" style={styles.icon} />}
            placeholder="Celular de contato"
            value={cellPhone}
            onChangeText={setCellPhone}
            style={styles.input}
            ref={fourthTextInput}
            blurOnSubmit={false}
            onSubmitEditing={() => fifthTextInput.current.focus()}
            returnKeyType="next"
          />
          <Input
            containerStyle={styles.containerInputStyle}
            icon={<MaterialCommunityIcons name="whatsapp" style={styles.icon} />}
            placeholder="WhatsApp"
            value={whatsapp}
            onChangeText={setWhatsApp}
            style={styles.input}
            ref={fifthTextInput}
            blurOnSubmit={false}
            onSubmitEditing={() => sixthTextInput.current.focus()}
            returnKeyType="next"
          />
          <Input
            containerStyle={styles.containerInputStyle}
            icon={<Fontisto name="email" style={styles.icon} />}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            ref={sixthTextInput}
            blurOnSubmit={false}
            onSubmitEditing={() => seventhTextInput.current.focus()}
            returnKeyType="next"
          />
          <Input
            containerStyle={styles.containerInputStyle}
            icon={<Fontisto name="locked" style={styles.icon}  />}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            ref={seventhTextInput}
            blurOnSubmit={false}
            onSubmitEditing={() => eighthTextInput.current.focus()}
            returnKeyType="next"
          />
          <Input
            containerStyle={styles.containerInputStyle}
            icon={<Fontisto name="locked" style={styles.icon} />}
            placeholder="Confirmação de senha"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            ref={eighthTextInput}
            blurOnSubmit
            onSubmitEditing={doRegister}
            returnKeyType="send"
          />
          <ButtonLoad
            load={loading}
            title="Cadastrar"
            titleStyle={styles.titleStyle}
            buttonStyle={styles.buttonStyle}
            onPress={doRegister}
          />
        </View>
      </Content>
    </Container>
  );
}

export default Register;
