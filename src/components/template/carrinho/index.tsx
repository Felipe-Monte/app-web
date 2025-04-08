'use client';

import { IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';
import { Container, CircleCart } from './styles';

export default function Carrinho() {
  return (
    <Link href="/carrinho">
      <Container>
        <IconShoppingCart size={32} stroke={1} />
        <CircleCart>99</CircleCart>
      </Container>
    </Link>
  );
}
