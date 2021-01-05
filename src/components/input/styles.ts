import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 10px;
  border: 1px solid #808080;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'Nunito-Regular';
  font-size: 16px;
  color: #808080;
`;

export const Icon = styled(Ionicons)`
  margin-right: 16px;
`;
