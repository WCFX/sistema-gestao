import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogoutButton } from '~/components';
import Colors from '~/colors';

import * as View from '~/views';
import MainDrawer from './drawer.routes';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Poppins_400Regular',
        },
      }}
    >
      <Screen name="Preload" component={View.Preload} />
      <Screen name="Login" component={View.Login} />
      <Screen
        options={{
          headerShown: true,
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
          headerShown: true,
          title: 'Crie sua conta',
          headerTintColor: `${Colors.darkPink}`,
        }}
        name="Register"
        component={View.Register}
      />
      <Screen name="MainDrawer" component={MainDrawer} />
    </Navigator>
  );
};

export default AuthRoutes;
