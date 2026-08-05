import Link from 'next/link';
import { ArrowLeft, Sparkles, Heart, GraduationCap, Stethoscope, BookOpen, Quote, CheckCircle2 } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'Success Stories & Impact | NAGR Bangladesh',
  description: 'Read the real-life success stories of scholars at Nazipur Girls Hostel and patients at Amnura Lutheran Mission Hospital.',
};

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      title: "From Agricultural Laborer to College Scholar: Shanti Tudu's Journey",
      category: "Education & Women Empowerment",
      icon: GraduationCap,
      badge: "Nazipur Girls Hostel",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
      location: "Patnitala, Naogaon",
      beneficiary: "Shanti Tudu (Age 19)",
      content: `
        Shanti Tudu was born in a remote Santal hamlet in Naogaon district. Due to extreme poverty, her family could barely afford basic meals, and Shanti was forced to drop out of 6th grade to work in agricultural fields.
        
        In 2018, NAGR's field team identified Shanti and admitted her to the Nazipur Girls Hostel. With full accommodation, nutritious meals, private tutoring, and school supplies provided free of charge, Shanti excelled academically.
        
        Today, Shanti has successfully passed her Higher Secondary Certificate (HSC) exams with Distinction and gained admission to Naogaon Government College. She plans to pursue a Bachelor's in Education to return to her village as a teacher.
      `,
      quote: "NAGR's hostel didn't just give me shelter—it gave me a dream and the wings to fly."
    },
    {
      id: 2,
      title: "Emergency Midnight Delivery: How Amnura Mission Hospital Saved Two Lives",
      category: "Maternal Health & Emergency Relief",
      icon: Stethoscope,
      badge: "Amnura Hospital (Reg 4472)",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
      location: "Amnura, Chapainawabganj",
      beneficiary: "Fulmoni Hembrom & Baby",
      content: `
        During a heavy monsoon night, 22-year-old Fulmoni Hembrom went into severe labor complications in a remote village 25 km away from Chapainawabganj town. Local traditional birth attendants declared the case high-risk.
        
        Her family contacted NAGR's emergency ambulance hotline. Within 40 minutes, Fulmoni was brought to Amnura Lutheran Mission Hospital (DGHS License Reg No: 4472).
        
        The hospital's 24/7 medical team performed a successful emergency delivery. Today, both Fulmoni and her healthy baby boy are thriving. Amnura Hospital has conducted over 1 million safe deliveries for rural mothers since its inception.
      `,
      quote: "Without the doctors at Amnura Mission Hospital, neither I nor my baby would be alive today."
    },
    {
      id: 3,
      title: "Preserving Mother Tongue: Kol Indigenous Children Learn Native Dialect",
      category: "Culture & Multilingual Literacy",
      icon: BookOpen,
      badge: "Kol Research Center",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800",
      location: "Babu-Dying, Chapainawabganj",
      beneficiary: "Kol Community Children",
      content: `
        The Kol community is one of the smallest and most endangered indigenous minority groups in Northern Bangladesh. For decades, younger generations faced language erosion as native dialects were absent from formal school curricula.
        
        On July 31, 2025, NAGR inaugurated the Kol Community Library & Research Center at Bilboiltha Indigenous Primary School.
        
        Children now attend after-school mother-tongue reading clubs, learning Kol folk songs, native vocabulary, and historical narratives. Over 120 children actively borrow books every week, bridging cultural pride with primary education.
      `,
      quote: "Our children are now speaking and writing our native Kol dialect with immense pride."
    }
  ];

  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      {/* Header Banner */}
      <section className="py-16 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to Homepage</span>
          </Link>

          <div className="space-y-3">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Real Field Impact</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              NAGR Bangladesh — <span className="text-gradient-emerald">Real Success Stories & Impact</span>
            </h1>
            <p className="text-emerald-200/80 text-sm sm:text-base max-w-3xl leading-relaxed">
              Read how our Multilingual Education (MLE), Nazipur Girls Hostel, Amnura Lutheran Hospital, and Kol Community Library are transforming lives across Northern Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-12">
          {stories.map((story) => {
            const IconComponent = story.icon;
            return (
              <div
                key={story.id}
                className="glass-card p-6 md:p-10 rounded-3xl border border-emerald-900/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Image */}
                <div className="lg:col-span-5 relative h-72 lg:h-96 rounded-2xl overflow-hidden border border-emerald-800/50 shadow-2xl">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-full shadow-md">
                      {story.badge}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    <IconComponent className="w-4 h-4" />
                    <span>{story.category}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {story.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-xs text-emerald-300/80 bg-emerald-950/60 p-3 rounded-xl border border-emerald-900/40">
                    <div>📍 Location: <span className="font-semibold text-white">{story.location}</span></div>
                    <div>👤 Beneficiary: <span className="font-semibold text-white">{story.beneficiary}</span></div>
                  </div>

                  <div className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed whitespace-pre-line space-y-2">
                    {story.content}
                  </div>

                  {/* Quote Block */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950 to-[#09180e] border-l-4 border-emerald-400 text-xs sm:text-sm text-emerald-200 italic flex items-start space-x-3">
                    <Quote className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>"{story.quote}"</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* CTA Footer Card */}
          <div className="glass-card p-8 rounded-3xl border border-emerald-500/30 text-center space-y-4 bg-gradient-to-r from-emerald-950 via-[#0a1b0f] to-emerald-950">
            <h3 className="text-2xl font-bold text-white">Be Part of Our Next Success Story</h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 max-w-xl mx-auto">
              Your support enables us to sponsor more indigenous female scholars, fund maternal care kits, and build community libraries.
            </p>
            <div className="pt-2">
              <Link
                href="/donate"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 font-bold text-sm shadow-xl hover:scale-105 transition-transform"
              >
                <Heart className="w-4 h-4 fill-emerald-950" />
                <span>Donate to NAGR Bangladesh</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
