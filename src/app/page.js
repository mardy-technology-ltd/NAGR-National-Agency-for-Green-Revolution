import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import HistorySection from '@/components/HistorySection';
import Speeches from '@/components/Speeches';
import ServicesSection from '@/components/ServicesSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import TeamSection from '@/components/TeamSection';
import PublicationsSection from '@/components/PublicationsSection';
import GallerySection from '@/components/GallerySection';
import NewsSection from '@/components/NewsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import CareerNoticeSection from '@/components/CareerNoticeSection';
import ContactSection from '@/components/ContactSection';
import PartnerTicker from '@/components/PartnerTicker';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'NAGR Bangladesh | National Agency for Green Revolution',
  description: 'Empowering rural and indigenous minority communities in Northern Bangladesh through education, health, and sustainable development since 1981.',
  openGraph: {
    title: 'NAGR Bangladesh | National Agency for Green Revolution',
    description: 'Empowering rural and indigenous minority communities in Northern Bangladesh through education, health, and sustainable development since 1981.',
    url: 'https://nagrbangladesh.org',
    siteName: 'NAGR Bangladesh',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'NAGR Bangladesh Community Interventions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Hero Banner Slider */}
      <HeroSlider />

      {/* History, Mission, Vision & Impact Stats */}
      <HistorySection />

      {/* Executive Speeches (Chairman & Director) */}
      <Speeches />

      {/* Our Services (Key Interventions Grid) */}
      <ServicesSection />

      {/* Transformative Core Projects Grid */}
      <ProjectsGrid />

      {/* Meet Our Team (Leadership & Branch Managers) */}
      <TeamSection />

      {/* Publications, Annual Reports & The Santal Times */}
      <PublicationsSection />

      {/* Photo Album Lightbox & Video Documentaries */}
      <GallerySection />

      {/* Latest News & Field Stories */}
      <NewsSection />

      {/* Institutional Partner Testimonials Slider */}
      <TestimonialsSection />

      {/* Development Partner Alliances & Modals */}
      <PartnersSection />

      {/* Careers, Procurement Tenders & Official Notices */}
      <CareerNoticeSection />

      {/* Contact Form & Office Locations */}
      <ContactSection />

      {/* Infinite Partner Logo Ticker */}
      <PartnerTicker />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}
