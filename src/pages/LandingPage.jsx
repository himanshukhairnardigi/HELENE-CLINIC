import { lazy, Suspense } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { StickyCTA } from '../components/sections/StickyCTA';

/* Lazy-loaded sections — ordered per DOCX structure */
const EmpathySection   = lazy(() => import('../components/sections/EmpathySection').then(m => ({ default: m.EmpathySection })));
const WhyRegenSection  = lazy(() => import('../components/sections/WhyRegenSection').then(m => ({ default: m.WhyRegenSection })));
const WhyJapanSection  = lazy(() => import('../components/sections/WhyJapanSection').then(m => ({ default: m.WhyJapanSection })));
const WhyHeleneSection = lazy(() => import('../components/sections/WhyHeleneSection').then(m => ({ default: m.WhyHeleneSection })));
const ResearchSection  = lazy(() => import('../components/sections/ResearchSection').then(m => ({ default: m.ResearchSection })));
const VideoSection     = lazy(() => import('../components/sections/VideoSection').then(m => ({ default: m.VideoSection })));
const ComparisonSection= lazy(() => import('../components/sections/ComparisonSection').then(m => ({ default: m.ComparisonSection })));
const Process          = lazy(() => import('../components/sections/Process').then(m => ({ default: m.Process })));
const Eligibility      = lazy(() => import('../components/sections/Eligibility').then(m => ({ default: m.Eligibility })));
const Testimonials     = lazy(() => import('../components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ              = lazy(() => import('../components/sections/FAQ').then(m => ({ default: m.FAQ })));
const ContactForm      = lazy(() => import('../components/sections/ContactForm').then(m => ({ default: m.ContactForm })));

function Fallback() {
  return <div style={{ minHeight: '160px' }} aria-hidden="true" />;
}

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Section 1 — Hero with condition toggle */}
        <Hero />

        {/* Section 2 — Empathy / "You've tried everything" */}
        <Suspense fallback={<Fallback />}><EmpathySection /></Suspense>

        {/* Section 3 — What makes regen medicine different */}
        <Suspense fallback={<Fallback />}><WhyRegenSection /></Suspense>

        {/* Section 4 — Why Japan */}
        <Suspense fallback={<Fallback />}><WhyJapanSection /></Suspense>

        {/* Section 5 — Why Helene Clinic */}
        <Suspense fallback={<Fallback />}><WhyHeleneSection /></Suspense>

        {/* Section 6 — Clinical research / evidence */}
        <Suspense fallback={<Fallback />}><ResearchSection /></Suspense>

        {/* Section 8 — Video */}
        <Suspense fallback={<Fallback />}><VideoSection /></Suspense>

        {/* Section 9 — Comparison tables */}
        <Suspense fallback={<Fallback />}><ComparisonSection /></Suspense>

        {/* Section 10 — Treatment journey / process */}
        <Suspense fallback={<Fallback />}><Process /></Suspense>

        {/* Eligibility */}
        <Suspense fallback={<Fallback />}><Eligibility /></Suspense>

        {/* Testimonials */}
        <Suspense fallback={<Fallback />}><Testimonials /></Suspense>

        {/* Section 11 — FAQ */}
        <Suspense fallback={<Fallback />}><FAQ /></Suspense>

        {/* Contact form */}
        <Suspense fallback={<Fallback />}><ContactForm /></Suspense>
      </main>
      <Footer />

      {/* Sticky bottom WhatsApp CTA bar */}
      <StickyCTA />
    </>
  );
}
