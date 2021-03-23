import React, { useState } from 'react';
import * as Style from './styles';
import AnimatedInput from 'react-native-animated-input';
import { View, Text } from 'react-native';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { LoginSvg } from '~/assets/svg';

const Home = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
            value={email}
            secur
            onChangeText={(t) => setEmail(t)}
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
            value={pass}
            onChangeText={(t) => setPass(t)}
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
          <Style.LoginButton>
            <Style.LoginButtonText>LOGIN</Style.LoginButtonText>
          </Style.LoginButton>
          <Style.ForgotPass>
            <Style.ForgotPassText>Forgot Password</Style.ForgotPassText>
          </Style.ForgotPass>
        </Style.Footer>
      </Style.ContainerForm>
    </Style.Container>
  );
};

export default Home;
