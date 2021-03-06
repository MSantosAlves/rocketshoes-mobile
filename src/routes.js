import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        cardStyle: {
          backgroundColor: '#191920',
        },
        header: navigation => <Header {...navigation} />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
