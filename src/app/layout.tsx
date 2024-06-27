import type { Metadata } from 'next';
import Header from '@ui/shared/header/header';
import { inter } from '@ui/fonts';
import '@ui/global.scss';

export const metadata: Metadata = {
  title: 'Olga Dementey | Frontend Developer',
  description:
    'Passionate learner, eager to dive into new technologies and take new challenges.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
