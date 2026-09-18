import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';

const logoUrl = 'https://mqvzczviyjdwmankwpyy.supabase.co/storage/v1/object/public/Logo%20Varad/299027867_734158458020591_4062664687879645484_n-removebg-preview.png';

export const metadata: Metadata = {
  title: 'Varad Srivastava | Financial Enthusiast',
  description:
    'Personal portfolio of Varad Srivastava, showcasing academic and professional work in finance, risk, Python, and data analysis.',
  icons: {
    icon: logoUrl,
    apple: logoUrl,
  },
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
