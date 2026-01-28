
import CustomerLogos from './components/CustomerLogos';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { HowItsWork } from '@/components/HowItsWork';
import BusinessMoving from './components/BusinessMoving';
import Categories from './components/Categories';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      {/* <CustomerLogos /> */}
      <Features />
      <HowItsWork />
      <BusinessMoving />
      <Categories />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

