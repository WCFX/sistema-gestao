import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StateProvider } from '~/context/StateContext';

import Routes from './routes';

export default () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar style="light" backgroundColor="#221c35" />
      </NavigationContainer>
    </StateProvider>
  );
};
