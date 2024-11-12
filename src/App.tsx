import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveBrokers from './components/InteractiveBrokers';
import PricingSection from './components/PricingSection';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import SocialBanner from './components/SocialBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <InteractiveBrokers />
      <PricingSection />
      <SocialProof />
      <FAQ />
      <SocialBanner />
    </div>
  );
}

export default App;