import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Style from './styles';
import { useStateValue } from '~/context/StateContext';
import { FontAwesome } from '@expo/vector-icons';
import { Platform } from 'react-native';

import api from '~/services/api';

import { showMessage, hideMessage } from 'react-native-flash-message';

import { LoginSvg } from '~/assets/svg';

const Login = () => {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const [context, dispatch] = useStateValue();

  const handleVisibility = () => {
    setVisible(!visible);
  };

  const handleLoginButton = async () => {
    if (cpf && password) {
      let result = await api.login(cpf, password);
      if (result.error === '') {
        dispatch({
          type: 'SET_TOKEN',
          payload: {
            token: result.token,
          },
        });
        dispatch({
          type: 'SET_USER',
          payload: {
            user: result.user,
          },
        });
        navigation.reset({
          index: 1,
          routes: [{ name: 'Home' }],
        });
      } else {
        alert(result.error);
      }
    } else {
      showMessage({
        message: 'Coloque seus dados para acessar o painel',
        type: 'danger',
      });
    }
  };
  const handleRegisterButton = () => {
    navigation.navigate('Register');
  };

  return (
    <Style.Container behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
      <Style.ContainerImg>
        <LoginSvg height="350" width="350" />
      </Style.ContainerImg>
      <Style.Block>
        <Style.Title>Login</Style.Title>
        <Style.Description>
          Coloque seus dados para entrar no painel
        </Style.Description>
      </Style.Block>

      <Style.FormContainer>
        <Style.Input
          value={cpf}
          onChangeText={(t) => setCpf(t)}
          placeholder="CPF"
          style={{ width: '100%' }}
          keyboardType="numeric"
        />
        <Style.Blocks>
          <Style.Input
            value={password}
            onChangeText={(t) => setPassword(t)}
            secureTextEntry={visible}
            placeholder="Senha"
            style={{ width: '85%' }}
          />
          <Style.VisibilityButton onPress={handleVisibility}>
            {visible ? (
              <FontAwesome name="eye" size={24} color="#ccc" />
            ) : (
              <FontAwesome name="eye-slash" size={24} color="#ccc" />
            )}
          </Style.VisibilityButton>
        </Style.Blocks>
      </Style.FormContainer>

      <Style.LoginButton onPress={handleLoginButton}>
        <Style.LoginButtonText>LOGIN</Style.LoginButtonText>
      </Style.LoginButton>
      <Style.LoginButton onPress={handleRegisterButton}>
        <Style.LoginButtonText>Cadastre-se</Style.LoginButtonText>
      </Style.LoginButton>
    </Style.Container>
  );
};

export default Login;
