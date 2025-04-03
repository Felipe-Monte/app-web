import Cabecalho from '../cabecalho';

export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div>
      <Cabecalho />
      <main>{props.children}</main>
    </div>
  );
}
