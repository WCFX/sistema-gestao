import React, { useState } from 'react';
import api from '~/services/api';
import { useStateValue } from '~/context/StateContext';

import * as Style from './styles';

const Register = () => {
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [context, dispatch] = useStateValue();

  return (
    <Style.Container>
      <Style.ContainerForm>
        <Style.Input
          placeholder="Nome Completo"
          value={name}
          onChangeText={(t) => setName(t)}
        />
        <Style.Input
          placeholder="Digite seu CPF"
          value={cpf}
          keyboardType="numeric"
          onChangeText={(t) => setCpf(t)}
        />
        <Style.Input
          placeholder="Digite seu e-mail"
          value={email}
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
          onChangeText={(t) => setPasswordConfirm(t)}
        />

        <Style.ButtonSubmit>
          <Style.ButtonSubmitText>CADASTRAR - SE</Style.ButtonSubmitText>
        </Style.ButtonSubmit>
      </Style.ContainerForm>
    </Style.Container>
  );
};

export default Register;
