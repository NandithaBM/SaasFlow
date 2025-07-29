import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';
import { FloatingWidget } from './components/ui/FloatingWidget';
import { useTheme } from './hooks/useTheme';
import { FloatingDoll } from './components/ui/FloatingDoll';
import { FAQ } from './components/sections/FAQ'
import { ContactForm } from './components/sections/ContactForm'

function App() {
  // Initialize theme hook to set up theme detection
  useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <FloatingDoll />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
}

export default App;