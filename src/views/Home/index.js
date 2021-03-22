import React from 'react';
import * as Style from './styles';
import { LoginSvg } from '~/assets/svg';

const Home = () => {
  return (
    <Style.Container>
      <Style.ContainerImg>
        <LoginSvg resizeMode="contain" height="400" width="400" />
      </Style.ContainerImg>

      <Style.ContainerForm></Style.ContainerForm>
    </Style.Container>
  );
};

export default Home;
