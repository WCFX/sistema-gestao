import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #221c35;
  width: 100%;
`;
export const ContainerImg = styled.View`
  margin-top: -50px;
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
  font-size: 18px;
  color: #555;
  padding-bottom: 20px;
`;
export const ContainerForm = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  border: 1px solid #221c35;
  border-radius: 12px;
  justify-content: center;
  align-self: center;
  margin: 5px 0;
  width: 80%;
  elevation: 6;
`;

export const Footer = styled.View`
  margin-top: 30px;
  align-items: center;
`;
export const LoginButton = styled.TouchableOpacity`
  /* padding: 15px 50px; */
  width: 50%;
  height: 40px;
  border-radius: 50px;
  background-color: #38304c;
  justify-content: center;
  margin-bottom: 10px;

  elevation: 4;
`;
export const LoginButtonText = styled.Text`
  align-self: center;
  font-family: Nunito_700Bold;
  color: #0df5e3;
  font-size: 22px;
`;
export const ForgotPass = styled.TouchableOpacity`
  padding: 20px;
`;
export const ForgotPassText = styled.Text`
  color: #0df5e3;
`;
