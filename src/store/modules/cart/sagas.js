import { Alert } from 'react-native';
import { call, put, all, select, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/formattedPrice';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productOnCart = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const productRequestAmount = productOnCart ? productOnCart.amount : 0;
  const amount = productRequestAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productOnCart) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@CART/ADD_REQUEST', addToCart),
  takeLatest('@CART/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
