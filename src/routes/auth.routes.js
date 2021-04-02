import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogoutButton } from '~/components';
import Colors from '~/colors';

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
          headerTitle: 'Olá, tudo bem? ✌ ',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#a9a8f6',
            elevation: 1,
          },
          headerRight: () => <LogoutButton />,
        }}
        name="Home"
        component={View.Home}
      />
      <Screen
        options={{
          title: 'Crie sua conta',
          headerTitleAlign: 'center',
          headerTintColor: `${Colors.darkPink}`,
        }}
        name="Register"
        component={View.Register}
      />
    </Navigator>
  );
};

export default AuthRoutes;
