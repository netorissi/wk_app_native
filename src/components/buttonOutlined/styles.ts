import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #4169e1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 18px;
  color: #4169e1;
`;
