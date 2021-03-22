import React, { useEffect } from 'react';
import { SkypeIndicator } from 'react-native-indicators';
import C from './styles';

const Preload = () => {
  return (
    <C.Container>
      <SkypeIndicator color="#8863E6" size={84} />
    </C.Container>
  );
};

export default Preload;
