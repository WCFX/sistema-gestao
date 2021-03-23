import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as View from '~/views';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator initialRouteName="Preload">
      <Screen
        options={{ headerShown: false }}
        name="Preload"
        component={View.Preload}
      />
      <Screen
        options={{ headerShown: false }}
        name="Login"
        component={View.Login}
      />
      <Screen
        // options={{ headerShown: false }}
        name="Home"
        component={View.Home}
      />
    </Navigator>
  );
};

export default AuthRoutes;
