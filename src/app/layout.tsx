import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const space = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PersonaX',
  description: 'Chat with AI versions of famous personalities from around the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space.className}>
        <main className='mx-10'>
          {children}
        </main>
      </body>
    </html>
  );
}