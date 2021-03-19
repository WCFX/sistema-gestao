import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as View from '~/views';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator initialRouteName="Preload">
      <Screen
        options={{
          headerShown: false,
        }}
        laranja
        name="Preload"
        component={View.Preload}
      />
      <Screen laranja name="Home" component={View.Home} />
    </Navigator>
  );
};

export default AuthRoutes;
