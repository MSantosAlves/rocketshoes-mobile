import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
  align-items: center;
`;

export const ProductsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ProductItem = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 300px;
`;

export const ProductImage = styled.Image`
  width: 280px;
  height: 280px;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 16px;
`;

export const Price = styled.Text`
  font-size: 21px;
  color: #333;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const AddProductButton = styled(RectButton)`
  background: #7159c1;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  margin-top: auto;
  width: 280px;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
  align-items: center;
  flex-direction: row;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ItemAmount = styled.Text`
  color: #eee;
  margin-left: 5px;
`;

export const AddProduct = styled.Text`
  flex: 1;
  text-align: center;
  color: #eee;
  font-weight: bold;
`;
