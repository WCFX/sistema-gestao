import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogoutButton } from '~/components';

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
        options={{
          // headerShow: false,
          headerRight: () => <LogoutButton />,
        }}
        name="Home"
        component={View.Home}
      />
      <Screen name="Register" component={View.Register} />
    </Navigator>
  );
};

export default AuthRoutes;
