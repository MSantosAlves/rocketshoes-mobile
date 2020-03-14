import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import '../../config/loadFont';
import { formatPrice } from '../../utils/formattedPrice';

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
  Scroll,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
  const dispatch = useDispatch();

  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  function handleRemoveFromCart(id) {
    dispatch(CartActions.removeFromCart(id));
  }

  return (
    <>
      <Scroll>
        <Container>
          <ProductList>
            {products.map(product => (
              <ProductContainer key={String(product.id)}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.price}</ProductPrice>
                  </ProductDetails>
                  <DeleteProduct
                    onPress={() => handleRemoveFromCart(product.id)}
                  >
                    <Icon name="delete-forever" size={24} color="#7159c1" />
                  </DeleteProduct>
                </ProductInfo>
                <ProductAmountContainer>
                  <ProductAmountControl>
                    <Icon
                      name="remove-circle-outline"
                      size={24}
                      color="#7159c1"
                    />
                    <ProductAmount>{product.amount}</ProductAmount>
                    <Icon name="add-circle-outline" size={24} color="#7159c1" />
                  </ProductAmountControl>
                  <SubTotal>{product.subtotal}</SubTotal>
                </ProductAmountContainer>
              </ProductContainer>
            ))}
          </ProductList>
          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalPrice>{total}</TotalPrice>
            <OrderButton>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </OrderButton>
          </TotalContainer>
        </Container>
      </Scroll>
    </>
  );
}
