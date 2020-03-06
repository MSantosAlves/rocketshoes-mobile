import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #141419;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const LogoWrapper = styled.TouchableOpacity`
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const BasketWrapper = styled.TouchableOpacity`
  height: 24px;
  max-width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  top: -9px;
  right: -9px;
  text-align: center;
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  overflow: hidden;
`;
