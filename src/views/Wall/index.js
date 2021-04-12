import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Style from './styles';

import { useStateValue } from '~/context/StateContext';
import { SkypeIndicator } from 'react-native-indicators';

import api from '~/services/api';

const Wall = () => {
  const navigation = useNavigation();
  const [wallList, setWallList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [context, dispatch] = useStateValue();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Mural de Avisos',
    });
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
      {loading && <SkypeIndicator color="#8863E6" size={84} />}

      {!loading && wallList.length === 0 && (
        <Style.NoListArea>
          <Style.NoListText>Não há avisos para você.</Style.NoListText>
        </Style.NoListArea>
      )}
    </Style.Container>
  );
};

export default Wall;
