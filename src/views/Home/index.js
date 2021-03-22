import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import * as Style from './styles';
import { LoginSvg } from '~/assets/svg';

import { Form } from '~/components';

const Home = () => {
  return (
    <Style.Container>
      <Style.ContainerImg>
        <LoginSvg height="350" width="350" />
      </Style.ContainerImg>

      <Style.ContainerForm>
        <Form />
      </Style.ContainerForm>
    </Style.Container>
  );
};

export default Home;
