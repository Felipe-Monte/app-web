"use client"
import { IconBrandAmazon } from '@tabler/icons-react';
import Link from 'next/link';

import { Container } from './styles';

export default function Logo() {
  return (
    <Link href="/">
      <Container>
        <div>A Z</div>
        <IconBrandAmazon size={40} stroke={1} />
      </Container>
    </Link>
  );
}
