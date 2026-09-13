import Hero from '../components/Hero';
import ValueStrip from '../components/ValueStrip';
import About from '../components/About';
import Services from '../components/Services';
import Solutions from '../components/Solutions';
import WhyChoose from '../components/WhyChoose';
import Process from '../components/Process';
import Results from '../components/Results';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueStrip />
      <About />
      <Services />
      <Solutions />
      <WhyChoose />
      <Process />
      <Results />
      <CTA />
      <FAQ />
      <Contact />
    </main>
  );
}
