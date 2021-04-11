import styled from 'styled-components/native';
import Colors from '~/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${Colors.purple1};
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: Poppins_400Regular;
  color: ${Colors.blue3};
`;
