import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #221c35;
  width: 100%;
`;
export const ContainerImg = styled.View`
  justify-content: flex-start;
  margin-top: -100px;
`;

export const Block = styled.View`
  width: 100%;
  margin-top: -50px;
  align-self: flex-start;
`;
export const Title = styled.Text`
  margin-left: 20px;
  font-family: Poppins_600SemiBold;
  font-size: 28px;
  color: #ffb9b9;
`;
export const Description = styled.Text`
  margin-left: 20px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  color: #555;
  padding-bottom: 20px;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 50px;
  width: 70%;
  margin: 10px;
  border-radius: 10px;
  background-color: #38304c;
  justify-content: center;
  elevation: 4;
`;
export const LoginButtonText = styled.Text`
  align-self: center;
  font-family: Nunito_700Bold;
  color: #0df5e3;
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
  placeholderTextColor: '#444',
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
  background-color: #111;
  position: absolute;
  right: 0;

  /* margin-right: -15px; */
  border-radius: 8px;
`;

// ACABOU O FORM
