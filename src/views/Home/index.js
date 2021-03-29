import React from 'react';
import api from '~/services/api';
import { useNavigation } from '@react-navigation/native';
import * as Style from './styles';
import { Modal } from '~/components';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Style.Container>
      <Style.Title>Hello world</Style.Title>
    </Style.Container>
  );
};

export default Home;
