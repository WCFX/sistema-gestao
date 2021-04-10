import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogoutButton } from '~/components';
import Colors from '~/colors';

import * as View from '~/views';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Poppins_400Regular',
        },
      }}
    >
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
          headerStyle: {
            backgroundColor: `${Colors.purple1}`,
            elevation: 0,
          },
          headerRight: () => <LogoutButton />,
        }}
        name="Home"
        component={View.Home}
      />
      <Screen
        options={{
          title: 'Crie sua conta',
          headerTintColor: `${Colors.darkPink}`,
        }}
        name="Register"
        component={View.Register}
      />
    </Navigator>
  );
};

export default AuthRoutes;
