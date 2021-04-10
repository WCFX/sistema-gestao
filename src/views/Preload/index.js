import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '~/context/StateContext';
import { SkypeIndicator } from 'react-native-indicators';
import api from '~/services/api';

import * as Style from './styles';

const Preload = () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  useEffect(() => {
    const checkLogin = async () => {
      let token = await api.getToken();
      if (token) {
        let result = await api.validateToken();
        if (result.error === '') {
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
          dispatch({
            type: 'SET_TOKEN',
            payload: {
              token: '',
            },
          });
          navigation.reset({
            index: 1,
            routes: [{ name: 'Login' }],
          });
        }
      } else {
        navigation.reset({
          index: 1,
          routes: [{ name: 'Login' }],
        });
      }
    };
    checkLogin();
  }, []);

  return (
    <Style.Container>
      <SkypeIndicator color="#8863E6" size={84} />
    </Style.Container>
  );
};

export default Preload;
