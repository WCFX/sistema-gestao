import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import { StateProvider } from '~/context/StateContext';

import Colors from './colors';

import Routes from './routes';

export default () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar style="light" backgroundColor={`${Colors.purple1}`} />
        <FlashMessage position="center" />
      </NavigationContainer>
    </StateProvider>
  );
};
