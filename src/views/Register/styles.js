import styled from 'styled-components/native';
import Colors from '~/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerForm = styled.View`
  margin-top: 20px;
  width: 100%;
`;

export const Input = styled.TextInput`
  border: 2px solid ${Colors.grey};
  border-radius: 5px;
  font-size: 18px;
  padding: 10px;
  width: 90%;
  color: ${Colors.black};
  align-self: center;
  font-family: Poppins_400Regular;
  margin: 10px 0;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  margin-top: 50px;
  align-self: center;
  width: 90%;
  border: 2px solid ${Colors.pink};
  border-radius: 12px;
`;

export const ButtonSubmitText = styled.Text`
  align-self: center;
  margin: 20px;
  color: ${Colors.blue1};
  font-family: Poppins_600SemiBold;
`;
