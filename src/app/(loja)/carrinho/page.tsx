'use client'
import { useContext } from 'react';
import Pagina from '@/components/template/pagina';

import ContextoCarrinho from '@/data/contexts/ContextoCarrinho';

export default function PaginaCarrinho() {
  const {numero} = useContext(ContextoCarrinho)

  return (
    <Pagina>
      <div>carrinho: {numero}</div>
    </Pagina>
  );
}
