import styled from 'styled-components/native';

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
