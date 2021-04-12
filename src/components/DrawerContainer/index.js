import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import * as Style from './styles';

import { useStateValue } from '~/context/StateContext';

const DrawerContainer = (props) => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const handleNavigate = () => {
    navigation.navigate('UnitScreen');
  };

  const handleChangeUnit = async () => {
    await AsyncStorage.removeItem('property');
    navigation.reset({
      index: 1,
      routes: [{ name: 'Home' }],
    });
  };

  const drawerOptions = [
    { title: 'Mural de avisos', icon: 'inbox', screen: 'Wall' },
    { title: 'Documentos', icon: 'file-text', screen: 'Documents' },
    { title: 'Reservas', icon: 'calendar', screen: 'Bookings' },
    { title: 'Livro de Ocorrências', icon: 'bug', screen: 'OccurrenceBook' },
    { title: 'Achados e Perdidos', icon: 'search', screen: 'LostAndFound' },
    { title: 'Boletos', icon: 'wpforms', screen: 'Billet' },
    { title: 'Perfil', icon: 'user', screen: 'Profile' },
  ];

  return (
    <Style.Container>
      <Style.Scroller></Style.Scroller>

      <Style.ChangeUnitArea>
        <Style.ChangeUnitButton onPress={handleChangeUnit}>
          <Style.ChangeUnitButtonText>
            Trocar Unidade
          </Style.ChangeUnitButtonText>
        </Style.ChangeUnitButton>
      </Style.ChangeUnitArea>

      <Style.FooterArea>
        <Style.FooterInfo>
          <Style.Profile>{context.user.user.name}</Style.Profile>
          <Style.PropertyName>{context.user.property.name}</Style.PropertyName>
        </Style.FooterInfo>

        <Style.FooterUnitButton onPress={handleNavigate}>
          <FontAwesome name="gear" size={24} color="#222" />
        </Style.FooterUnitButton>
      </Style.FooterArea>
    </Style.Container>
  );
};

export default DrawerContainer;
