import CustomerLogos from './components/CustomerLogos';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AnalyticsFeatures from './components/AnalyticsFeatures';
import InsightsFeatures from './components/InsightsFeatures';
import BusinessContinuitySection from './components/BusinessContinuitySection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      {/* <CustomerLogos /> */}
      <AnalyticsFeatures />
      <InsightsFeatures />
      <BusinessContinuitySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

