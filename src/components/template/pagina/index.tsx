'use client'
import Cabecalho from '../cabecalho';
import { Wrapper, Container } from './styles'

export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pagina(props: PaginaProps) {
  return (
    <Wrapper>
      <Cabecalho />
      <Container>{props.children}</Container>
    </Wrapper>
  );
}
