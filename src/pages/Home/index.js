import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { formatPrice } from '../../utils/formattedPrice';
import '../../config/loadFont';

import {
  Container,
  ProductsList,
  ProductItem,
  ProductImage,
  Title,
  Price,
  AddProductButton,
  ItemAmount,
  ProductAmount,
  AddProduct,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);

  const itemAmount = useSelector(state =>
    state.cart.reduce((itemsAmount, product) => {
      itemsAmount[product.id] = product.amount;
      return itemsAmount;
    }, [])
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProductList() {
    return (
      <>
        <ProductsList
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductItem key={item.id}>
              <ProductImage source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Price>{item.priceFormatted}</Price>

              <AddProductButton onPress={() => handleAddProduct(item.id)}>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ItemAmount>{itemAmount[item.id] || 0}</ItemAmount>
                </ProductAmount>
                <AddProduct>ADICIONAR</AddProduct>
              </AddProductButton>
            </ProductItem>
          )}
        />
      </>
    );
  }

  return <Container>{renderProductList()}</Container>;
}
