import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useStateValue } from '~/context/StateContext';
import Colors from '~/colors';

import * as View from '~/views';
import { DrawerContainer } from '~/components';

const { Navigator, Screen } = createDrawerNavigator();

export default () => {
  const [context, dispatch] = useStateValue();

  return (
    <Navigator
      drawerContent={(props) => <DrawerContainer {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTintColor: `${Colors.blue4}`,
        headerTitleStyle: {
          fontFamily: 'Poppins_400Regular',
          fontSize: 16,
        },
        headerStyle: {
          backgroundColor: `${Colors.purple1}`,
          elevation: 0,
        },
      }}
    >
      <Screen name="Wall" component={View.Wall} />
    </Navigator>
  );
};
