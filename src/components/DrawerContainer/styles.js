import styled from 'styled-components/native';
import Colors from '~/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.grey};
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  margin: 20px 0;
`;

export const ChangeUnitArea = styled.View`
  margin: 20px;
`;

export const ChangeUnitButton = styled.TouchableOpacity`
  background-color: ${Colors.purple1};
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ChangeUnitButtonText = styled.Text`
  color: ${Colors.white};
  font-size: 15px;
  font-family: Archivo_600SemiBold;
`;

export const FooterArea = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterInfo = styled.View``;

export const Profile = styled.Text`
  font-size: 16px;
  font-family: Archivo_600SemiBold;
  color: ${Colors.black};
`;

export const PropertyName = styled.Text`
  font-size: 14px;
  font-family: Archivo_600SemiBold;
  color: ${Colors.black};
`;

export const FooterUnitButton = styled.TouchableOpacity``;

export const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: 10px;
  padding: 0 10px;
`;
export const MenuButtonText = styled.Text`
  margin-left: 10px;
  font-family: Poppins_400Regular;
`;
export const MenuSquare = styled.View`
  width: 5px;
  height: 35px;
  margin-right: 20px;
  background-color: transparent;
  border-radius: 5px;
`;
