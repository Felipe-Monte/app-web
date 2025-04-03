'use client';
import Carrinho from '../carrinho';
import Logo from '../logo';

import { Container } from './styles';

export default function Cabecalho() {
  return (
    <Container>
      <Logo />
      <Carrinho />
    </Container>
  );
}
