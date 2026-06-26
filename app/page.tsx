import StarfieldCanvas from '@/components/StarfieldCanvas';
import Cursor from '@/components/Cursor';
import ProgressBar from '@/components/ProgressBar';
import RevealObserver from '@/components/RevealObserver';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Fixed overlays */}
      <StarfieldCanvas />
      <ProgressBar />
      <Cursor />
      <RevealObserver />

      {/* Page structure */}
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
