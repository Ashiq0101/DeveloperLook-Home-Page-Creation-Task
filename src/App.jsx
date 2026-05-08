import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LogosIntroSection from './components/LogosIntroSection';
import FeaturedWork from './components/FeaturedWork';
import ChasingConsumers from './components/ChasingConsumers';
import Services from './components/Services';
import Pioneers from './components/Pioneers';
import WhatsNew from './components/WhatsNew';
import ReadyToRise from './components/ReadyToRise';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <LogosIntroSection />
        <FeaturedWork />
        <Services />
        <ChasingConsumers />
        <Pioneers />
        <WhatsNew />
        <ReadyToRise />
      </main>
      <Footer />
    </div>
  );
}

export default App;
