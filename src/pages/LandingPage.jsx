import { lazy, Suspense } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { FloatingWhatsApp } from '../components/sections/FloatingWhatsApp';

const About = lazy(() => import('../components/sections/About').then(m => ({ default: m.About })));
const TreatmentSection = lazy(() => import('../components/sections/TreatmentSection').then(m => ({ default: m.TreatmentSection })));
const Benefits = lazy(() => import('../components/sections/Benefits').then(m => ({ default: m.Benefits })));
const WhyUs = lazy(() => import('../components/sections/WhyUs').then(m => ({ default: m.WhyUs })));
const Process = lazy(() => import('../components/sections/Process').then(m => ({ default: m.Process })));
const Eligibility = lazy(() => import('../components/sections/Eligibility').then(m => ({ default: m.Eligibility })));
const Doctors = lazy(() => import('../components/sections/Doctors').then(m => ({ default: m.Doctors })));
const Testimonials = lazy(() => import('../components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('../components/sections/FAQ').then(m => ({ default: m.FAQ })));
const ContactForm = lazy(() => import('../components/sections/ContactForm').then(m => ({ default: m.ContactForm })));

function SectionFallback() {
  return <div style={{ height: '200px' }} aria-hidden="true" />;
}

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TreatmentSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Eligibility />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Doctors />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
