import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '~/colors';

import api from '~/services/api';

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
    {
      title: 'Livro de Ocorrências',
      icon: 'bookmark',
      screen: 'OccurrenceBook',
    },
    { title: 'Achados e Perdidos', icon: 'search', screen: 'LostAndFound' },
    { title: 'Boletos', icon: 'wpforms', screen: 'Billet' },
    { title: 'Perfil', icon: 'user-o', screen: 'Profile' },
  ];

  const handleNavigateToNextScreen = () => {
    navigation.navigate(item.screen);
  };

  const handleLogoutButton = async () => {
    await api.logout();
    navigation.reset({
      index: 1,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <Style.Container>
      <Style.Scroller>
        {drawerOptions.map((item, index) => (
          <Style.MenuButton key={index} onPress={handleNavigateToNextScreen}>
            <Style.MenuSquare></Style.MenuSquare>
            <FontAwesome name={item.icon} size={20} color="#333" />
            <Style.MenuButtonText>{item.title}</Style.MenuButtonText>
          </Style.MenuButton>
        ))}
        <Style.MenuButton onPress={handleLogoutButton}>
          <Style.MenuSquare></Style.MenuSquare>
          <FontAwesome name="sign-out" size={20} color="#333" />
          <Style.MenuButtonText>Sair</Style.MenuButtonText>
        </Style.MenuButton>
      </Style.Scroller>

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
