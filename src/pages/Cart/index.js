import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import '../../config/loadFont';

import {
  Container,
  ProductList,
  ProductContainer,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductAmountContainer,
  DeleteProduct,
  ProductAmountControl,
  ProductAmount,
  SubTotal,
  TotalContainer,
  TotalText,
  TotalPrice,
  OrderButton,
  OrderText,
} from './styles';

export default function Cart() {
  return (
    <>
      <Container>
        <ProductList>
          <ProductContainer>
            <ProductInfo>
              <ProductImage
                source={{
                  uri:
                    'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&ims=326x',
                }}
              />
              <ProductDetails>
                <ProductTitle>Tênis Nike</ProductTitle>
                <ProductPrice>R$ 139,00</ProductPrice>
              </ProductDetails>
              <DeleteProduct>
                <Icon name="delete-forever" size={24} color="#7159c1" />
              </DeleteProduct>
            </ProductInfo>
            <ProductAmountContainer>
              <ProductAmountControl>
                <Icon name="remove-circle-outline" size={24} color="#7159c1" />
                <ProductAmount />
                <Icon name="add-circle-outline" size={24} color="#7159c1" />
              </ProductAmountControl>
              <SubTotal>R$ 139,00</SubTotal>
            </ProductAmountContainer>
          </ProductContainer>
        </ProductList>
        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalPrice>R$ 139,00</TotalPrice>
          <OrderButton>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </OrderButton>
        </TotalContainer>
      </Container>
    </>
  );
}
