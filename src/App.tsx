import React, { useEffect } from 'react';
import Header from './components/Header';
import CryptoTicker from './components/CryptoTicker';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import MainContent from './components/MainContent';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  // Set meta tags for SEO
  useEffect(() => {
    document.title = "Trezor Bridge - Essential Connection Software for Your Hardware Wallet";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CryptoTicker />
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <MainContent />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;