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
  AmountControlButton,
  ProductAmount,
  SubTotal,
  TotalContainer,
  TotalText,
  TotalPrice,
  OrderButton,
  OrderText,
  Scroll,
  EmptyContainer,
  EmptyText,
  EmptySubText,
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

  function handleIncrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function handleDecrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <>
      <Scroll>
        <Container>
          {products.length ? (
            <>
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
                        <AmountControlButton
                          onPress={() => handleDecrementAmount(product)}
                        >
                          <Icon
                            name="remove-circle-outline"
                            size={24}
                            color="#7159c1"
                          />
                        </AmountControlButton>
                        <ProductAmount>{product.amount}</ProductAmount>
                        <AmountControlButton
                          onPress={() => handleIncrementAmount(product)}
                        >
                          <Icon
                            name="add-circle-outline"
                            size={24}
                            color="#7159c1"
                          />
                        </AmountControlButton>
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
            </>
          ) : (
            <EmptyContainer>
              <Icon name="remove-shopping-cart" size={100} color="#7159c1" />
              <EmptyText>O carrinho está vazio!</EmptyText>
              <EmptySubText>
                Explore os produtos da loja e adicione os produtos que desejar.
              </EmptySubText>
            </EmptyContainer>
          )}
        </Container>
      </Scroll>
    </>
  );
}
