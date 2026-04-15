import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import FAQ from '../components/FAQ';

const Landing = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Process />
      <FAQ />
    </main>
  );
};

export default Landing;
