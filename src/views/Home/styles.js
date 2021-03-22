import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const waterColor = '#0df5e3';

export const Container = styled(LinearGradient).attrs({
  colors: ['#201a30', '#2f2647'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #201a30;
`;

export const Title = styled.Text`
  font-size: 18px;
`;
