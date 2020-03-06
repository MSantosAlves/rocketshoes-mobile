import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#141419',
        },
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
