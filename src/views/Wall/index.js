import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Style from './styles';

import { useStateValue } from '~/context/StateContext';
import { SkypeIndicator } from 'react-native-indicators';

import { DrawerContainer } from '~/components';

import api from '~/services/api';

const Home = () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [wallList, setWallList] = useState([]);

  useEffect(() => {
    navigation.setOptions = {
      HeaderTitle: 'Mural de Avisos',
    };
    getWall();
  }, []);

  const getWall = async () => {
    setLoading(true);
    const result = await api.getWall();
    setLoading(false);

    if (result.error === '') {
      setWallList(result.list);
    } else {
      alert(result.error);
    }
  };

  return (
    <Style.Container>
      <Style.Scroller>
        <SkypeIndicator color="#8863E6" size={84} />
      </Style.Scroller>
    </Style.Container>
  );
};

export default Home;
