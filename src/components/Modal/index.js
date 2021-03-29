import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#fc0339' }}
              onPress={handleLogoutButton}
            >
              <Text style={styles.textStyle}>Deseja Sair ?</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: '#0df5e3',
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Ops! Me enganei</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <SimpleLineIcons name="logout" size={24} color="black" />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flexDirection: 'row',
    margin: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
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
    backgroundColor: '#F194FF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#221c35',
    padding: 10,
    elevation: 2,
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
  },
});
