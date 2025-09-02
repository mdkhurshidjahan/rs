import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Dr. Maher Ali Rusho - AI Scientist & Researcher',
  description: 'Portfolio of Dr. Maher Ali Rusho, youngest Honorary Doctor of Science, AI researcher, and founder of UntieAI Research Lab.',
  keywords: ['AI researcher', 'artificial intelligence', 'machine learning', 'academic portfolio', 'computer science'],
  authors: [{ name: 'Dr. Maher Ali Rusho' }],
  creator: 'Dr. Maher Ali Rusho',
  openGraph: {
    title: 'Dr. Maher Ali Rusho - AI Scientist & Researcher',
    description: 'Portfolio of Dr. Maher Ali Rusho, youngest Honorary Doctor of Science, AI researcher, and founder of UntieAI Research Lab.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Maher Ali Rusho - AI Scientist & Researcher',
    description: 'Portfolio of Dr. Maher Ali Rusho, youngest Honorary Doctor of Science, AI researcher, and founder of UntieAI Research Lab.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-background relative overflow-x-hidden">
            <div className="fixed inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
            <Navigation />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}