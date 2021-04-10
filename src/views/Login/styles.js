import styled from 'styled-components/native';
import Colors from '~/colors';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${Colors.purple1};
  width: 100%;
`;
export const ContainerImg = styled.View`
  justify-content: flex-start;
  margin-top: -100px;
`;

export const Block = styled.View`
  width: 100%;
  margin-top: 10px;
  align-self: flex-start;
`;
export const Title = styled.Text`
  margin-left: 20px;
  font-family: Poppins_700Bold;
  font-size: 28px;
  color: ${Colors.blue5};
`;
export const Description = styled.Text`
  margin-left: 20px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  color: ${Colors.darkGrey};
  padding-bottom: 20px;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 50px;
  width: 70%;
  margin: 10px;
  border-radius: 10px;
  background-color: ${Colors.blue1};
  justify-content: center;
  elevation: 4;
`;
export const LoginButtonText = styled.Text`
  align-self: center;
  font-family: Poppins_700Bold;
  color: ${Colors.blue5};
  font-size: 22px;
`;

// FORM

export const FormContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
`;
export const Blocks = styled.View`
  flex-direction: row;
  height: 50px;
  margin-top: 10px;
  width: 100%;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: `${Colors.blue6}`,
})`
  elevation: 3;
  border: 1px solid #151515;
  border-radius: 5px;
  font-size: 18px;
  /* padding: 10px 0; */
  padding: 10px;
  width: 90%;
  color: #fff;
  align-self: center;
  font-family: Poppins_400Regular;
`;

export const VisibilityButton = styled.TouchableHighlight`
  padding: 14px;
  background-color: ${Colors.black};
  position: absolute;
  right: 0;
  border-radius: 8px;
`;
