import React, { useState, useEffect } from 'react';
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

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

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

              <AddProductButton>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ItemAmount>0</ItemAmount>
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
