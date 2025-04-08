"use client"
import Cabecalho from '../cabecalho';
import { Container } from './styles';

export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div>
      <Cabecalho />
      <Container>{props.children}</Container>
    </div>
  );
}
