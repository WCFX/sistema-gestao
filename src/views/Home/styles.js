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

export const AreaText = styled.View`
  width: 100%;
  height: 300px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: Poppins_400Regular;
  color: ${Colors.blue3};
`;

export const PropertyList = styled.View`
  margin: 20px 0;
`;

export const ButtonArea = styled.TouchableOpacity`
  background-color: ${Colors.white};
  border: 1px solid ${Colors.grey};
  border-radius: 20px;
  padding: 15px;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-family: Archivo_600SemiBold;
`;
