import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Style from './styles';

import { useStateValue } from '~/context/StateContext';
import { SkypeIndicator } from 'react-native-indicators';

import api from '~/services/api';

const Home = () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkProperty = async () => {};
    checkProperty;
  }, []);

  return (
    <Style.Container>
      <Style.Scroller>
        {loading && <SkypeIndicator color="#8863E6" size={84} />}

        {!loading && context.user.user.properties.length > 0 && (
          <>
            <Style.Title>Olá {context.user.user.name}</Style.Title>
            <Style.Title>Escolha uma das suas propriedades</Style.Title>
          </>
        )}
        {!loading && context.user.user.properties.length <= 0 && (
          <Style.AreaText>
            <Style.Title>
              Parabéns pelo cadastro {context.user.user.name},{' '}
            </Style.Title>
            <Style.Title>
              Agora a administração precisa liberar o seu acesso.
            </Style.Title>
          </Style.AreaText>
        )}
      </Style.Scroller>
    </Style.Container>
  );
};

export default Home;
