import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Signals from "./components/Signals";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="w-full max-w-[1280px] mx-auto">
        <Hero />
        <Features />
        <HowItWorks />
        <Signals />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
