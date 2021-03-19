import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as View from '~/views';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen laranja name="Home" component={View.Home} />
    </Navigator>
  );
};

export default Routes;
