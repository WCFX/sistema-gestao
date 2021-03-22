import React, { useState } from 'react';
import { Platform } from 'react-native';
import * as Styles from './styles';

const Form = () => {
  return (
    <Styles.Container behavior={Platform.OS == 'ios' ? 'padding' : 'padding'}>
      <Styles.ContainerInfo>
        <Styles.Title>Login</Styles.Title>
        <Styles.Description>Please sign in to continue</Styles.Description>
      </Styles.ContainerInfo>
      <Styles.FormContainer>
        <Styles.Input placeholder="Email" />
        <Styles.Input placeholder="Pass" />
      </Styles.FormContainer>
    </Styles.Container>
  );
};

export default Form;
