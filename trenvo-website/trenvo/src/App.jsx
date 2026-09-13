import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import EarningsDisclaimer from './pages/EarningsDisclaimer';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-midnight">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/earnings-disclaimer" element={<EarningsDisclaimer />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
