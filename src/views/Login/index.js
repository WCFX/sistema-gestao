import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Style from './styles';
import { useStateValue } from '~/context/StateContext';
import AnimatedInput from 'react-native-animated-input';
import { Platform } from 'react-native';

import api from '~/services/api';

import { LoginSvg } from '~/assets/svg';

const Login = () => {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const [context, dispatch] = useStateValue();

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
      alert('Preencha os campos');
    }
  };
  const handleRegisterButton = () => {
    navigation.navigate('Register');
  };

  return (
    <Style.Container behavior={Platform.OS == 'ios' ? 'padding' : 'padding'}>
      <Style.ContainerImg>
        <LoginSvg height="350" width="350" />
      </Style.ContainerImg>

      <Style.ContainerForm>
        <Style.Title>Login</Style.Title>
        <Style.Description>Please sign in to continue</Style.Description>
        <Style.Content>
          <AnimatedInput
            placeholder="Email"
            errorText="Error"
            value={cpf}
            secur
            onChangeText={(t) => setCpf(t)}
            styleLabel={{
              fontFamily: 'Poppins_600SemiBold',
              color: '#ffb9b9',
            }}
            styleInput={{
              color: '#eee',
              fontFamily: 'Archivo_400Regular',
            }}
            styleBodyContent={{
              paddingLeft: 20,
              borderBottomWidth: 1.5,
            }}
          />
        </Style.Content>

        <Style.Content>
          <AnimatedInput
            placeholder="Password"
            errorText="Error"
            secureTextEntry
            value={password}
            onChangeText={(t) => setPassword(t)}
            styleLabel={{
              fontFamily: 'Poppins_600SemiBold',
              color: '#ffb9b9',
            }}
            styleInput={{
              color: '#eee',
              fontFamily: 'Archivo_400Regular',
            }}
            styleBodyContent={{
              paddingLeft: 20,
              borderBottomWidth: 1.5,
            }}
          />
        </Style.Content>

        <Style.Footer>
          <Style.LoginButton onPress={handleLoginButton}>
            <Style.LoginButtonText>LOGIN</Style.LoginButtonText>
          </Style.LoginButton>
          <Style.LoginButton onPress={handleRegisterButton}>
            <Style.LoginButtonText>Cadastre-se</Style.LoginButtonText>
          </Style.LoginButton>
        </Style.Footer>
      </Style.ContainerForm>
    </Style.Container>
  );
};

export default Login;
