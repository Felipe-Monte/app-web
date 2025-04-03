import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Meu E-commerce',
  description: 'E-commerce de produtos eletrônicos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
