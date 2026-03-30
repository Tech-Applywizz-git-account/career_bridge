import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Product from './components/Product';
import AvailabilityCallout from './components/AvailabilityCallout';
import Comparison from './components/Comparison';
import WhoWeServe from './components/WhoWeServe';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import KeyTakeaways from './components/KeyTakeaways';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Benefits />
        <Process />
        <Product />
        <AvailabilityCallout />
        <Comparison />
        <WhoWeServe />
        <Reviews />
        <FAQ />
        <KeyTakeaways />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
