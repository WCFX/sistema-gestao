import React, { useState } from 'react';
import api from '~/services/api';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '~/context/StateContext';

import * as Style from './styles';

const Register = () => {
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [context, dispatch] = useStateValue();

  const navigation = useNavigation();

  const handleRegisterButton = async () => {
    if (name && email && cpf && password && passwordConfirm) {
      let result = await api.register(
        name,
        email,
        cpf,
        password,
        passwordConfirm,
      );
      if (result.error === '') {
        dispatch({ type: 'SET_TOKEN', payload: { token: result.token } });
        dispatch({ type: 'SET_USER', payload: { user: result.user } });

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

  return (
    <Style.Container>
      <Style.ContainerForm>
        <Style.Input
          placeholder="Nome Completo"
          value={name}
          onChangeText={(t) => setName(t)}
        />
        <Style.Input
          placeholder="Digite o seu CPF"
          value={cpf}
          keyboardType="numeric"
          onChangeText={(t) => setCpf(t)}
        />
        <Style.Input
          placeholder="Digite seu e-mail"
          value={email}
          autoCapitalize="none"
          onChangeText={(t) => setEmail(t)}
        />
        <Style.Input
          placeholder="Digite sua senha"
          value={password}
          secureTextEntry
          onChangeText={(t) => setPassword(t)}
        />
        <Style.Input
          placeholder="Digite novamente sua senha"
          value={passwordConfirm}
          secureTextEntry
          onChangeText={(t) => setPasswordConfirm(t)}
        />

        <Style.ButtonSubmit onPress={handleRegisterButton}>
          <Style.ButtonSubmitText>CADASTRAR - SE</Style.ButtonSubmitText>
        </Style.ButtonSubmit>
      </Style.ContainerForm>
    </Style.Container>
  );
};

export default Register;
