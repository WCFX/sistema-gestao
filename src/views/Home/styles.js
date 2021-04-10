import styled from 'styled-components/native';
import Colors from '~/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${Colors.purple1};
`;

export const Title = styled.Text`
  margin: 20px;
`;

export const ButtonLogout = styled.TouchableOpacity`
  width: 150px;
  border: 2px solid red;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
export const ButtonLogoutText = styled.Text`
  font-size: 18px;
`;
