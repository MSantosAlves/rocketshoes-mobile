import React from 'react';
import { View, Button } from 'react-native';

// import { Container } from './styles';

export default function Home({ navigation }) {
  return (
    <>
      <View>
        <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
      </View>
    </>
  );
}
