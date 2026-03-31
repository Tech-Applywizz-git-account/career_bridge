import { RouterProvider, Route } from './router';
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
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import BookCall from './components/BookCall';
import BookingConfirmed from './components/BookingConfirmed';
import Admin from './components/Admin';

function HomePage() {
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

export default function App() {
  return (
    <RouterProvider>
      <Route path="/" component={HomePage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/book" component={BookCall} />
      <Route path="/booking-confirmed" component={BookingConfirmed} />
      <Route path="/admin" component={Admin} />
    </RouterProvider>
  );
}
