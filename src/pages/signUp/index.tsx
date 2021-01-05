import React from 'react';

import Input from '../../components/input';
import Button from '../../components/button';
import ButtonOutlined from '../../components/buttonOutlined';

import {Container, Title, Footer} from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Title>Vamos começar!</Title>

      <Input name="name" icon="happy-outline" placeholder="Nome Completo" />
      <Input
        name="document"
        icon="shield-checkmark-outline"
        placeholder="CPF"
      />

      <Button onPress={() => console.log('clicou')}>Continuar</Button>

      <Footer>
        <ButtonOutlined onPress={() => console.log('clicou')}>
          Já sou cadastrado!
        </ButtonOutlined>
      </Footer>
    </Container>
  );
};

export default SignUp;
