import React, { useState } from 'react';
import api from '~/services/api';
import { useStateValue } from '~/context/StateContext';

import * as Style from './styles';

const Register = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [context, dispatch] = useStateValue();

  return (
    <Style.Container>
      <Style.Title>Bem vindo ao cadastre-se</Style.Title>
    </Style.Container>
  );
};

export default Register;
