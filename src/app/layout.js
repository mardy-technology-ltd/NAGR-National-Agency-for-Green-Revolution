import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  title: 'NAGR Bangladesh | National Agency for Green Revolution',
  description: 'Official website of National Agency for Green Revolution (NAGR) Bangladesh. Empowering ethnic Santal and rural communities through Multilingual Education (MLE), maternal health, and green development.',
  keywords: ['NAGR Bangladesh', 'NGO Bangladesh', 'Santal Education', 'Multilingual Education', 'Rajshahi NGO', 'Green Revolution'],
  openGraph: {
    title: 'NAGR Bangladesh | National Agency for Green Revolution',
    description: 'Empowering marginalized indigenous and rural communities in Northern Bangladesh.',
    url: 'https://nagrbangladesh.org',
    siteName: 'NAGR Bangladesh',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'NAGR Community Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased selection:bg-emerald-500 selection:text-emerald-950">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
