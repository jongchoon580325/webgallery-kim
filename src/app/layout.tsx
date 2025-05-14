import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import ClientLayout from '@/components/layout/ClientLayout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smart Gallery',
  description: 'A modern web photo gallery application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA: manifest, favicon, theme-color, service worker registration */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/deacon_kim_01.ico" />
        <meta name="theme-color" content="#2196F3" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
