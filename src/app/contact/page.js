import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'Contact Us | NAGR Bangladesh',
  description: 'Get in touch with NAGR Bangladesh head office in Rajshahi and field office in Naogaon.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      <section className="py-12 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Communication Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Contact <span className="text-gradient-emerald">Us</span>
          </h1>
          <p className="text-emerald-200/80 text-sm max-w-2xl mx-auto">
            Reach out to our Rajshahi secretariat or Naogaon field office.
          </p>
        </div>
      </section>

      <ContactSection />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
