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
    const checkProperty = async () => {
      let property = await AsyncStorage.getItem('property');
      if (property) {
        property = JSON.parse(property);
      }
      setLoading(false);
    };
    checkProperty();
  }, []);

  const chooseProperty = async (property) => {
    await AsyncStorage.setItem('property', JSON.stringify(property));

    dispatch({
      type: 'SET_PROPERTY',
      payload: {
        property,
      },
    });

    navigation.reset({
      index: 1,
      routes: [{ name: 'MainDrawer' }],
    });
  };

  return (
    <Style.Container>
      <Style.Scroller>
        {loading && <SkypeIndicator color="#8863E6" size={84} />}

        {!loading && context.user.user.properties.length > 0 && (
          <>
            <Style.Title>Olá {context.user.user.name}</Style.Title>
            <Style.Title>Escolha uma das suas propriedades</Style.Title>

            <Style.PropertyList>
              {context.user.user.properties.map((item, index) => (
                <Style.ButtonArea
                  key={index}
                  onPress={() => chooseProperty(item)}
                >
                  <Style.ButtonText>{item.name}</Style.ButtonText>
                </Style.ButtonArea>
              ))}
            </Style.PropertyList>
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
