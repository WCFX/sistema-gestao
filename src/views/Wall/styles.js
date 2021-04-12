import styled from 'styled-components/native';
import Colors from '~/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.purple1};
`;

export const NoListArea = styled.View`
  justify-content: center;
  align-items: center;
`;

export const NoListText = styled.Text`
  font-size: 22px;
  color: #fff;

  font-family: Archivo_700Bold;
`;
