import React from 'react';
import * as Style from './styles';

import { LoginSvg } from '~/assets/svg';

const Home = () => {
  return (
    <Style.Container>
      <Style.ContainerImg>
        <LoginSvg height="300" width="300" />
      </Style.ContainerImg>
    </Style.Container>
  );
};

export default Home;
