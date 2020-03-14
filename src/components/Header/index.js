import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  Wrapper,
  LogoWrapper,
  BasketWrapper,
  ItemCount,
} from './styles';

import '../../config/loadFont';

export default function Header({ navigation }) {
  const totalCartItems = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <LogoWrapper onPress={() => navigation.navigate('Home')}>
          <Logo />
        </LogoWrapper>
        <BasketWrapper onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{totalCartItems || 0}</ItemCount>
        </BasketWrapper>
      </Container>
    </Wrapper>
  );
}
