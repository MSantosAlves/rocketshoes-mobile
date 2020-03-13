import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = api.get('/products');

      setProducts(response);
    }

    loadProducts();
  }, []);

  return (
    <>
      <Container />
    </>
  );
}
