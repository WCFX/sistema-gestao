import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import api from '~/services/api';
import { useStateValue } from '~/context/StateContext';
import * as Style from './styles';

const Form = ({ value, onChangeText }) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Style.FormContainer>
      <Style.Input
        value={value}
        onChangeText={onChangeText}
        placeholder="CPF"
        style={{ width: '100%' }}
      />
      <Style.Blocks>
        <Style.Input
          value={value}
          onChangeText={onChangeText}
          secureTextEntry
          placeholder="Senha"
          style={{ width: '85%' }}
        />
        <Style.VisibilityButton>
          <FontAwesome name="eye" size={24} color="#ccc" />
          {/* <FontAwesome name="eye-off" size={24} color="black" /> */}
        </Style.VisibilityButton>
      </Style.Blocks>
    </Style.FormContainer>
  );
};

export default Form;
