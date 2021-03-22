import React from 'react';
import * as Styles from './styles';
import AnimatedInput from 'react-native-animated-input';

const Form = () => {
  return (
    <Styles.Container>
      <Styles.ContainerTitle>
        <Title>Login</Title>
        <Description>Please sign in to continue</Description>
      </Styles.ContainerTitle>
      <Styles.FormContainer>
        <AnimatedInput
          placeholder="Email"
          valid={isValid}
          errorText="Error"
          onChangeText={handleChange}
          value={email}
          styleLabel={{ fontWeight: '600' }}
          styleBodyContent={{ borderBottomWidth: 1.5 }}
        />
        <AnimatedInput
          placeholder="Password"
          valid={isValid}
          errorText="Error"
          onChangeText={handleChange}
          value={email}
          styleLabel={{ fontWeight: '600' }}
          styleBodyContent={{ borderBottomWidth: 1.5 }}
        />
      </Styles.FormContainer>
    </Styles.Container>
  );
};

export default Form;
