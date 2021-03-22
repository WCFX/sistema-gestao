import React, { useState } from 'react';
import * as Styles from './styles';
import AnimatedInput from 'react-native-animated-input';

const Form = () => {
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Styles.Container>
      <Styles.ContainerInfo>
        <Styles.Title>Login</Styles.Title>
        <Styles.Description>Please sign in to continue</Styles.Description>
      </Styles.ContainerInfo>
      <Styles.FormContainer>
        <AnimatedInput
          placeholder="Email"
          valid={isValid ? 'blue' : 'red'}
          errorText="Error"
          value={email}
          onChangeText={() => setEmail()}
          styleLabel={{ fontWeight: '600' }}
          styleBodyContent={{ borderBottomWidth: 1.5 }}
        />
        <AnimatedInput
          placeholder="Password"
          valid={isValid}
          errorText="Error"
          value={password}
          onChangeText={() => setPassword()}
          styleLabel={{ fontWeight: '600' }}
          styleBodyContent={{ borderBottomWidth: 1.5 }}
        />
      </Styles.FormContainer>
    </Styles.Container>
  );
};

export default Form;
