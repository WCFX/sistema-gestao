import React, { useState } from 'react';
import LottieView from 'lottie-react-native';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import { SallySvg } from '~/assets/svg';

import api from '~/services/api';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  const handleLogoutButton = async () => {
    await api.logout();
    navigation.reset({
      index: 1,
      routes: [{ name: 'Login' }],
    });
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View blurRadius={90} style={styles.modalView}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#e7396e' }}
              onPress={handleLogoutButton}
            >
              <Text style={{ ...styles.textStyle, color: '#333' }}>
                Deseja Sair ?
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: '#36bde2',
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{ ...styles.textStyle, color: '#fff' }}>
                Ops! Me enganei
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ backgroundColor: '#a9a8f6' }}>
          <SallySvg height="400" width="400" />
          <View style={{ marginBottom: 500 }} />
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <SimpleLineIcons name="logout" size={34} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#2a2835',
    borderRadius: 14,
    width: 300,
    height: 150,
    marginTop: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 3.25,
    shadowRadius: 5.84,
    elevation: 9,
  },
  openButton: {
    borderRadius: 6,
    padding: 10,
    elevation: 7,
    marginHorizontal: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
  },
});
