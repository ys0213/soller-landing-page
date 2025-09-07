import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PickTheSunSection from './components/PickTheSunSection';
import FeaturesSection from './components/FeaturesSection';
import PowerfulFeaturesSection from './components/PowerfulFeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ContainerSection from './components/ContainerSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <PickTheSunSection />
        <FeaturesSection />
        <PowerfulFeaturesSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <ContainerSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
