import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Varad Srivastava | Financial Enthusiast',
  description:
    'Personal portfolio of Varad Srivastava, showcasing academic and professional work in finance, risk, Python, and data analysis.',
  openGraph: {
    title: 'Varad Srivastava | Financial Enthusiast',
    description:
      'A cinematic, scroll-driven portfolio for Varad Srivastava.',
    url: 'https://your-domain.com',
    siteName: 'Varad Srivastava Portfolio',
    images: [
      {
        url: 'https://mqvzczviyjdwmankwpyy.supabase.co/storage/v1/object/public/Portfolio/frame_0001.webp',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'font-body antialiased bg-background'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
