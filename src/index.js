import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" background="#fff" />
      <Routes />
    </NavigationContainer>
  );
}
