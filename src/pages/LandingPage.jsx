import { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const About = lazy(() => import('../components/About'));
const Treatment = lazy(() => import('../components/Treatment'));
const Benefits = lazy(() => import('../components/Benefits'));
const WhyHelene = lazy(() => import('../components/WhyHelene'));
const ProcessTimeline = lazy(() => import('../components/ProcessTimeline'));
const Eligibility = lazy(() => import('../components/Eligibility'));
const Doctors = lazy(() => import('../components/Doctors'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FAQ = lazy(() => import('../components/FAQ'));
const ContactForm = lazy(() => import('../components/ContactForm'));

function SectionLoader() {
  return (
    <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '32px', height: '32px', border: '3px solid #e0e8ed', borderTopColor: '#1a6b8a', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  );
}

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Treatment />
          <Benefits />
          <WhyHelene />
          <ProcessTimeline />
          <Eligibility />
          <Doctors />
          <Testimonials />
          <FAQ />
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
